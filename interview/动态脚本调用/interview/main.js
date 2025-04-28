const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('calls.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS function_calls (id INTEGER PRIMARY KEY AUTOINCREMENT, call_string TEXT, result TEXT)');
});

function clearModuleCache(modulePath) {
  const resolvedPath = require.resolve(modulePath);
  delete require.cache[resolvedPath];
}

function loadModule(moduleName) {
  const modulePath = path.join(__dirname, 'scripts', `${moduleName}.js`);
  
  if (!fs.existsSync(modulePath)) {
    return { error: `模块 ${moduleName} 不存在` };
  }
  
  clearModuleCache(modulePath);
  
  try {
    return require(modulePath);
  } catch (error) {
    return { error: `加载模块 ${moduleName} 失败: ${error.message}` };
  }
}

function executeFunction(moduleStr, funcStr, argsStr) {
  try {
    const module = loadModule(moduleStr);
    
    if (module.error) {
      return module.error;
    }
    
    if (!module[funcStr]) {
      return `函数 ${funcStr} 在模块 ${moduleStr} 中不存在`;
    }
    
    // 解析参数
    let args = [];
    try {
      // 将参数字符串转换为数组
      args = JSON.parse(`[${argsStr}]`);
    } catch (e) {
      return `参数解析错误: ${e.message}`;
    }
    
    // 执行函数
    const result = module[funcStr](...args);
    return result;
  } catch (error) {
    return `执行错误: ${error.message}`;
  }
}

function saveCallToDb(callString, result) {
  db.run('INSERT INTO function_calls (call_string, result) VALUES (?, ?)', [callString, result], function(err) {
    if (err) {
      console.error('保存失败:', err);
    }
  });
}

const htmlPage = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>函数执行器</title>
</head>

<body style="width: 100%; display: flex; justify-content: center;">

    <main style="display: flex; flex-direction: column; align-items: center;">
        <h1>函数执行器</h1>
        <form id="executor">
            <input 
                id="inputField"
                style="height: 2em; width: 30em;" 
                type="text" 
                placeholder="请输入内容">
            <button 
                type="submit" 
                style="background: #f35353; width: 5em; height: 2.5em; margin-left: .5em; cursor: pointer;">
                执行
            </button>
        </form>

        <section aria-live="polite" style="margin-top: 20px;">
            <p id="outputContent"></p>
        </section>
    </main>

    <script>
        const outputContent = document.getElementById('outputContent');
        const input = document.getElementById('inputField');

        document.getElementById('executor').addEventListener('submit', async(event) => {
            event.preventDefault();

            const inputValue = input.value.trim(); 

            if (inputValue) {
                try {
                    const response = await fetch('/execute', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ params: inputValue })
                    });

                    const data = await response.json();
                    outputContent.textContent = data.result || data.error;
                } catch (error) {
                    outputContent.textContent = error.message;
                }
            } 
        });
    </script>
</body>

</html>
`;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
  
    // 处理主页请求
    if (pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlPage);
        return;
    }
  
    // 处理函数执行请求
    if (pathname === '/execute' && req.method === 'POST') {
        let body = '';
    
        req.on('data', chunk => {
            body += chunk.toString();
        });
    
        req.on('end', () => {
            try {
                const { params } = JSON.parse(body);
                console.log('Received params:', params);
                
                const match = params.match(/^([^\.]+)\.([^\(]+)\(([^\)]*)\)$/);
                if (!match) {
                    throw new Error('Invalid input format. Expected: module.function(arg1,arg2,...)');
                }
                
                const module = match[1];
                const func = match[2];
                const args = match[3];
                
                const result = executeFunction(module, func, args);
                
                saveCallToDb(params, result.toString());
                
                res.writeHead(200);
                res.end(JSON.stringify({ result }));
            } catch (error) {
                res.writeHead(500);
                res.end(JSON.stringify(err));
            }
        });
    
        return;
    }
  
    // 处理404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
});
server.listen(8080, () => {
    console.log('服务器运行在 http://localhost:8080/');
});
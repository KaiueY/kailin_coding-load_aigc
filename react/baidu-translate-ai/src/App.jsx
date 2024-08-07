import { useState, useRef, useEffect } from 'react'
import LanguageSelector from './components/LanguageSlector'
import './App.css'
import Progress from './components/Progressing'

const App = () => {
  // useState 现在最牛逼的hook技术 
  // vue 借鉴了 react hooks 思想 
  // useReducer vue-router , react 框架本身就内置了hook函数
  // pinia api 
  const [sourceLanguage, setSourceLanguage] = useState('eng_Latn')
  const [targetLanguage, setTargetLanguage] = useState('zho_Hans')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [disabled, setDisabled] = useState(false)
  // 进度条数据数组 { fileName:, percent:'' }
  const [progressItems, setProgressItems] = useState([]);
  // LLM 准备好了吗？
  const [ready, setReady] = useState(true);

  const [status, setStatus] = useState('Loading......')
  const worker = useRef(null); // 响应式 web worker 对象

  useEffect(() => {
    // 局部 onMouted
    // console.log('mounted')
    if (!worker.current) {
      worker.current = new Worker(
        new URL("./worker.js", import.meta.url), {
        type: 'module'
      }
      )
      console.log(worker.current)

      worker.current.addEventListener('message', (e) => {
        console.log(e, '+++++++++++++++++++')
        switch (e.data.status) {
          case 'initiate':
            setReady(false)
            // 接受一个函数 
            // 上一次的状态
            setProgressItems((prev) => [...prev, e.data])
            break;
          case 'progress':
            // console.log(e.data, '?????')
            setProgressItems(
              prev => prev.map(item => {
                if (item.file === e.data.file) {
                  return { ...item, progress: e.data.progress };
                } else {
                  return item;
                }
              })
            )
            break;
          case 'done':
            setProgressItems((prev) => prev.filter(item => item.file !== e.data.file

            ))
            break
          case 'update':
            setOutput(e.data.output)
            setStatus('Compeleted!')
            break
          case 'completed':
            setDisabled(false)
            break
        }
      })

    }

    return () => {
      // onUnMounted
      // console.log('unmounted')
      // worker.current = null
    }
  })

  const translate = () => {
    setDisabled(true)
    // ai 任务复杂， event loop 在这里就不灵了 
    // 前端游戏， 加密， 压缩， AI  , 多线程 Web Worker 
    // html5 浏览器提供的多线程机制（纯计算类，不能做DOM, 没有this ）
    worker.current.postMessage({
      text: input,
      src_lang: sourceLanguage,
      tgt_lang: targetLanguage
    })
  }

  return (
    <>
      <h1>Transformers.js</h1>
      <p>来自HuggingFace 抱抱脸社区的NLP js库，完成常见AI 任务</p>
      <p>未来端模型将大放异彩</p>
      <div className="container">
        <LanguageSelector
          type="Source"
          defaultLanguage={sourceLanguage}
          onChange={x => setSourceLanguage(x.target.value)}
        />
        <LanguageSelector
          type="Target"
          defaultLanguage={targetLanguage}
          onChange={x => setTargetLanguage(x.target.value)}
        />

      </div>
      <div className="textbox-container">
        <textarea
          value={input}
          row={3}
          onChange={(e) => setInput(e.target.value)}  >
        </textarea>
        <textarea
          value={output}
          row={3}
          readOnly>
        </textarea>
      </div>
      <button disabled={disabled} onClick={translate}>Translate</button>
      {/* <Progress text="下载中"/> */}
      <div className="progress-bars-container">
        {
          ready === false && (
            <label>{status}</label>
          )
        }
        {progressItems.map((data) => (
          <div key={data.file}>
            <Progress text={data.file} percentage={data.progress} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App 
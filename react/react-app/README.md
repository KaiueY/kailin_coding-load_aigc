- #root 挂载点 react接管
- react/vue 开启了前端开发新篇章
    - 不在需要dom编码
    - mvvm的世界
 - React.creatElement('div',proops,children)  //创建虚拟dom
 - React提供JSX语法  在js写html <div>{name}</div> 也是一种xml xml in js
    提升界面表现能力

    src/index.js JSX语法  由src编译成js react支持JSX 
 - ReactDOM.render() //渲染虚拟dom

 ## create-react-app 带来了生产工艺流程的理解
      - 1.0 项目初始化
      - 2.0 项目开发
      - 3.0 项目上线
      - 4.0 测试阶段
      但是外网无法访问

      - 开发流程
         - 当你拿到一个项目的时候
         - 领到了开发任务 登录功能
         - 你会进入src目录src/ 进入相应功能开发
         - 在本地lcocalhost:3000 本地开发调试
         - npm run build 打包一个上线代码包
         - serve -s ./ 本地模拟线上环境
         - Pc端使用局域网ip访问
         - deply 真正的push上线

   - vercel 
      - 云开发
      - 本地开发一键上云
      - vercel login
      - vercel deploy 让代码部署到云端  匹配一个免费的二级域名 指向上传的build目录
      http://localhost:3000 development
      http://localhost:59363  build 
      test
      https://react-ht0gp9nqw-kailins-projects-a54fbfcb.vercel.app/ production


      -

 ## react 不同的环境
    - /src 是开发目录 不是上线目录
    - 经过 npm run build 生成的是上线目录 production（产品）
    - /public 是上线目录
    
- JSX 拥有强大的表现力
   React.createElement() //创建虚拟dom 有点繁琐 
优化  模块化 职责分离
- index.js 就负责根节点的接洽
- App.js  根组件
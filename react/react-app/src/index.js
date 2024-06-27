
import ReactDOM from 'react-dom/client';
import React from 'react';
// module导入
import App from './app/app';

const root = ReactDOM.createRoot(
  //只执行这一次 DOM查找 ReactDOM做的
  // DOM什么都好 就是功能差
  document.getElementById('root')
)

// const element = React.createElement('h1',{className:'title',id:'tlt'},'Hello World!')

//  const element = React.createElement(
//   'div',
//   {className:'container'},
//   React.createElement('h1',
//     {className:'title'},
//     'kailin'
//   )
//  )
//职责分离 入口文件不用注释的内容一般渲染 root只负责一个节点
root.render(
  // element

  // <div className='container'>
  //   <h1 className='title'>kailin</h1>
  // </div>

  <App />

)
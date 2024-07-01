import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

//新时代的前端开发  旧时代的是DOM API
// 新时代接管root 节点
const root = ReactDOM.createRoot(
  document.getElementById('root')
)

// const element = React.createElement(
//   'div',{className:'container'},
//   React.createElement('header',{className:'header'},'Hello World'),
//   React.createElement('main',{className:'main'},'Hello World'),

//   React.createElement('footer',{className:'footer'},'Hello World'),
//   React.createElement('aside',{className:'aside'},'Hello World'),
//   React.createElement('article',{className:'article'},'Hello World'),
//   React.createElement('aside',{className:'aside'},'Hello World')
// )

// React Element 不是DOM element 叫做虚拟DOM vitual DOM 全新打造的
  // const element = (
  //   <div className="container">
  //     <header>header </header>
  //     <main>
  //       <aside>aside </aside>
  //       <article>artile</article>
  //       <aside>aside</aside>
  //     </main>
  //     <footer>footer</footer>
  //   </div>
  // )


root.render(<App/>)
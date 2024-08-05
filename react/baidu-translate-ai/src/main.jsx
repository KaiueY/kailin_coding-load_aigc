import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const RootEle = () => {
//   const [show, setShow] = useState(true)
//   setTimeout(() => {
//     setShow(false)
//   }, 5000)
//   return (
//     <>
//       {show ? <App /> : <></>}
//     </>
//   )
// }



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <RootEle>
   
  </RootEle> */}
  <App />
  </React.StrictMode>,
)

import './App.css'
import { useRef, useState, useEffect } from 'react'
import LanguageSelector from './components/LanguageSlector'
import Process from './components/Progressing.jsx'

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState('eng_Latn')
  const [targetLanguage, setTargetLanguage] = useState('zho_Hans')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [disabled, setDisabled] = useState(false)
  const worker = useRef(null)

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(
        new URL("./worker.js", import.meta.url), {
          type: 'module',
          
        }
      )
      console.log(worker.current)

      worker.current.addEventListener('message', (e) => {
        console.log('+++++++++++++')
      })
      
      
    }

    return () => {
      // console.log('unMouted');
      // worker.current = null
    }
  })

  const translate = () => {
    setDisabled(!disabled)
    // 如果ai任务比较复杂 但是太复杂 用一般的event loop思想 不太灵了 
    // 如前端游戏 加密 压缩 AI ，所以 可以交给多线程 web worker
    // HTML5 浏览器提供的多线程机制 （纯计算类 不能做DOM 没有this）
    worker.current.postMessage({text:'请帮我翻译'})
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
          rows={3}
          onChange={(e) => setInput(e.target.value)}
        >
        </textarea>
        <textarea
          value={output}
          rows={3}
          readOnly
        ></textarea>
      </div>
      <button disabled={disabled} onClick={translate}>Translate</button>
      <Process text={'LLM'} percentage={2}  />
    </>
  )
}

export default App
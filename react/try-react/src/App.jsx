//根组件 返回JSX的函数就是组件
import AppHeader from './components/app-Header'
const App = () => {
  const name = '旅梦开发团队'
  
  return(
    <div className="container">
      <AppHeader name={name} theme="day"/>
    </div>
  )
}
export default App

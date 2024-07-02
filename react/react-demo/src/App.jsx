import AppHeader from './conponents/app-header'
// 父组件
const App=()=>{
  return (
    <div className="container">
      {/* 子组件 */}
      <AppHeader name="糖糖童鞋"/>
    </div>
  )
}
export default App
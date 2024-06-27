// 这就是根组件 挂载在根节点root上
//把他看成一个组件
//react使用函数创建一个组件  注意 一定要返回jsx元素
// 组件不同于html 他是 一堆的html+css+js  比如说一个轮播图组件 
// 页面也就可以由组件组成 组件可以复用
import AppHeader from './components/app-header';


const App = () => {
    const element = (
        <div className="container">
            <AppHeader name='kailin'/>
            {/* 组件可以复用 */}
            <AppHeader name="Yue" />
        </div>
    )
        
    return element
}
export default App //返回jsx元素
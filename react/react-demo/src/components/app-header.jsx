//类组件
// 用到了es6的语法 Component基类 继承
import {Component} from 'react';
class AppHeader extends Component{
    
    constructor(props){
        // 调用父类的构造函数
        super(props);   
        // 组件中的数据 除了props之外 还有state 自有状态
        // state 状态
        this.state={
            emoji:'😀大胆'
        }
        console.log('111111');
    }
    // onload()
    //生命周期函数 当组件挂载完成之后
    componentDidMount(){
        // 组件挂载完成之后
        console.log('222222');
        setInterval(()=>this.changeEmoji(),1000)
    }
    componentDidUpdate(){
        console.log('333333',this.state.emoji);
    }
    //方法
    changeEmoji=()=>{
        // Component内置的方法 
        this.setState({
            emoji:this.state.emoji==='😀大胆'?'😢小丑':this.state.emoji==='😢小丑'?'😂真的C':'😀大胆'
        })
    }
    // 类里面的abstract 方法 必须要实现的方法
    // 这样会报错 没有render 哪来的html呢
    render(){
        const {name}=this.props;
        const {emoji}=this.state;
        return (
            <div className="app-header">
                <h1 className="title"> {name}：{emoji}</h1>
            </div>
        )
    }
}
export default AppHeader;
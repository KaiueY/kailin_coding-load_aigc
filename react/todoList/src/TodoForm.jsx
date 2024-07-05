import { Component } from "react";
import './TodoForm.css'

class TodoForm extends Component {
    constructor(props){
        super(props);
        // 私有属性
        this.state = {
            inputText:''
        }
    }
    handleChange=(event)=>{
        this.setState({
            inputText:event.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.inputText.trim()){
            this.props.addTodo(this.state.inputText)
            this.setState({
                inputText:''
            })
        }
    }

    render(){
        return (
            <form className="todo-Form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.inputText}
                    className="todo-Form__input"
                    onChange={this.handleChange}
                />
                <button className="todo-Form__button">
                    Add
                </button>
            </form>
        );
    }
}
export default TodoForm;
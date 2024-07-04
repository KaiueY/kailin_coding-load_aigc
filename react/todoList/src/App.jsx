import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './App.css'
import Storage from "./utils/storage";

const instance = Storage.getInstance()

class App extends Component {
  constructor(props) {
    super(props);
    const saveTodos = JSON.parse(localStorage.getItem('todos')) || []
    this.state = {
      todos: saveTodos
    }
  }
  componentDidUpdate(){
    instance.setItem('todos', JSON.stringify(this.state.todos))
  }

  addTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          completed: false,
        }
      ]
    }
    )
  }

  deleteTodo = (index) => {
    // 创建一个新的 不做引用式更新
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    })
  }

  toggleTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].completed = !newTodos[index].completed;
    this.setState({
      todos: newTodos
    })
  }

editTodo = (index, newText) => {
  const newTodos = [...this.state.todos];
  newTodos[index].text = newText;
  this.setState({
    todos: newTodos
  });
}

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-app">
        <h1 className="todo-app_title">Todo List</h1>

        <TodoForm addTodo={this.addTodo} />
        <TodoList
      
          todos={todos}
          toggleTodo = {this.toggleTodo}
          deleteTodo = {this.deleteTodo}
          editTodo = {this.editTodo}
          
           />
      </div>
    )
  }
}
export default App;
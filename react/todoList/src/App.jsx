import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          text: 'coding',
          completed: false,

        }
      ]
    }
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
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-app">
        <h1 className="todo-app_title">Todo List</h1>

        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={todos} />
      </div>
    )
  }
}
export default App;
import { Component } from "react";
import TodoItem from "./TodoItem";
import './TodoList.css'

class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return (
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem key={index} />
                ))}
            </ul>

        )
    }
}
export default TodoList;
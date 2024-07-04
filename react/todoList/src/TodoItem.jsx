import { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props) {
        super(props); // 修改这里，添加props
        this.state = {
            isEditing: false,
            editText: this.props.todo.text
        };
    }

    handleEditChange = (e) => {
        this.setState({
            editText: e.target.value
        });
    };
    handleEditSave = (e) => {
        this.props.editTodo(this.props.index, this.state.editText);
        this.setState({
            isEditing: false
        });
    };


    render() {
        const { todo, index, toggleTodo, deleteTodo,editTodo } = this.props;
        const { isEditing, editText } = this.state;
        const { text, completed } = todo;
        return (
            <li className={`todo-item ${completed ? 'todo-item_completed' : ''}`}>
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            value={editText}
                            onChange={this.handleEditChange}
                        />
                        <button onClick={() => this.handleEditSave(index)}
                            className="todo-item__save-btn"
                        >保存</button>
                    </div>
                ) : (
                    <span className="todo-item__text" onClick={() => { toggleTodo(index) }}>
                        {text}
                    </span>
                )}
                <span
                    className="todo-item__edit-btn"
                    onClick={() => this.setState({ isEditing: true })}
                    aria-label="编辑"
                >
                    ✏️
                </span>
                <span
                    className="todo-item__delete"
                    onClick={() => { deleteTodo(index) }}
                    aria-label="删除"
                >
                    ❌
                </span>
            </li>
        );
    }
}

export default TodoItem;
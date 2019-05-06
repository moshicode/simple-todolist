import React from 'react';

const Todo = props => {
    return (
        <li style={{
            textDecoration: props.todo.isComplete ? 'line-through' : ''
        }}
            onClick={props.toggleComplete}>{props.todo.text}
            <i class="fas fa-times" onClick={props.deleteTodo}></i>
        </li>
    )
};

export default Todo
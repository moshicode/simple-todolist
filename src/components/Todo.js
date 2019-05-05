import React from 'react';

const Todo = props => {
    return (
        <li style={{
            textDecoration: props.todo.isComplete ? 'line-through' : ''
        }}
            onClick={props.toggleComplete}>{props.todo.text}
            <button onClick={props.deleteTodo}>X</button>
        </li>
    )
};

export default Todo
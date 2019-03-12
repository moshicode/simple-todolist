import React from 'react';

const Todo = props => {
    return (
        <li style={{
            textDecoration: props.todo.isComplete ? 'line-through' : ''
        }}
            onClick={props.toggleComplete}>{props.todo.text}
        </li>
    )
};

export default Todo
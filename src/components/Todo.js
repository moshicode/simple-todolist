import React from 'react';

const Todo = props => {
    return (
        <React.Fragment>
            <li>
                <p onClick={props.toggleComplete}
                    style={{ textDecoration: props.todo.isComplete ? 'line-through' : '' }}>{props.todo.text}
                </p>
                <i className="fas fa-times" onClick={props.deleteTodo}></i>
            </li>
        </React.Fragment>
    )
};

export default Todo
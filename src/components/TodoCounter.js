import React from 'react';

const TodoCounter = props => {
    return (
        <div>
            {props.todoList.filter(todo => todo.isComplete === true).length} tasks completed from {props.todoList.length}
        </div>
    )
};

export default TodoCounter
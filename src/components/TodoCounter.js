import React from 'react';

const TodoCounter = props => {
    let { todoList } = props
    return (
        <React.Fragment>
            <div className="status">
                completed: {todoList.filter(todo => todo.isComplete === true).length} | todos {todoList.length}
            </div>
        </React.Fragment>
    )
};

export default TodoCounter
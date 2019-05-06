import React, { Component } from 'react';

class TodoForm extends Component {
    state = {
        text: ''
    }

    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = () => {
        if (this.state.text !== '') {
            this.props.addNewTodo({
                // date: new Date(),
                id: this.props.getUniqueID(),
                text: this.state.text,
                isComplete: false
            })
            this.setState({ text: '' })
        }
    }

    handleKeyPress = e => {
        if (e.charCode === 13 || e.key === 'Enter') {
            this.handleSubmit()
        }
    }

    render() {
        return (
            <div>
                <input
                    className="todo-input"
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Write a new todo..."
                />
                <button className="add-new-btn" onClick={this.handleSubmit}>Add</button>
            </div>
        )
    }
}

export default TodoForm
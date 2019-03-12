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

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.text !== '') {
            this.props.addNewTodo({
                text: this.state.text,
                isComplete: false
            })
            this.setState({ text: '' })
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="Write a new task"
                />
                <button onClick={this.handleSubmit}>Add</button>
            </div>
        )
    }
}

export default TodoForm
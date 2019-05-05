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
        // e.preventDefault()
        if (this.state.text !== '') {
            this.props.addNewTodo({
                id: this.props.getUniqueID(),
                text: this.state.text,
                isComplete: false
            })
            this.setState({ text: '' })
        }
    }

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            console.log('enter')
            this.handleSubmit()
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Write a new task"
                />
                <button onClick={this.handleSubmit}>Add</button>
            </div>
        )
    }
}

export default TodoForm
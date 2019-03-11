import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoList: [{ text: 'First Task', taskCheck: true }],
      todoInput: ''
    }
  }

  handleChange = e => {
    this.setState({
      todoInput: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.state.todoInput !== '') {
      this.setState({
        todoList: [...this.state.todoList, { text: this.state.todoInput, taskCheck: false }],
        todoInput: ''
      })
    }
  }

  render() {
    let { todoList, todoInput } = this.state
    return (
      <div className="App">
        <input
          type="text"
          value={todoInput}
          onChange={this.handleChange}
          placeholder="Write a new task"
        />
        <button onClick={this.onSubmit}>Add</button>
        <div className='todo-list'>
          <ul className='list'>
            {todoList.map((todo, index) => todo.taskCheck ? <li key={index} className="is-checked">{todo.text}</li> : <li key={index}>{todo.text}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

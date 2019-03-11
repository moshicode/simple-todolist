import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoList: [],
      todoInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      todoInput: e.target.value
    })
  }

  onSubmit = () => {
    if (this.state.todoInput !== '') {
      this.setState({
        todoList: [...this.state.todoList, this.state.todoInput]
      })
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.todoInput} onChange={this.handleChange} placeholder="Write a new task" />
        <button onClick={this.onSubmit}>Add</button>
        <div className='todo-list'>
          <ul className='list'>
            {this.state.todoList.map(todo => <li>{todo}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

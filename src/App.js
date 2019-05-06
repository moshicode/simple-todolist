import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoCounter from './components/TodoCounter'
import Todo from './components/Todo'

class App extends Component {
  state = {
    todoList: [
      { date: new Date(), id: 0, text: 'First Task', isComplete: false },
      { date: new Date(), id: 1, text: 'This is todo number 2', isComplete: false },
      { date: new Date(), id: 2, text: 'todo N.3 Misson complete', isComplete: true }
    ]
  }

  getUniqueID = () => {
    let ID
    if (this.state.todoList.length > 0) {
      ID = this.state.todoList[this.state.todoList.length - 1].id + 1
    } else {
      ID = 0
    }
    return ID
  }

  addNewTodo = todo => {
    this.setState({
      todoList: [...this.state.todoList, todo],
    })
  }

  toggleComplete = id => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo
        }
      })
    })
  }

  deleteTodo = id => {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== id)
    })
  }

  render() {
    let { todoList } = this.state
    return (
      <div className="App">
        <div id="header">
          <h1>todolist</h1>
          <TodoCounter todoList={todoList} />
        </div>
        <TodoForm addNewTodo={this.addNewTodo} getUniqueID={this.getUniqueID} />
        <div className='todo-list'>
          <ul className='list'>
            {todoList.map((todo, index) =>
              <Todo
                key={index}
                todo={todo}
                toggleComplete={() => this.toggleComplete(todo.id)}
                deleteTodo={() => this.deleteTodo(todo.id)}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;



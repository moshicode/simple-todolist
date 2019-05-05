import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoCounter from './components/TodoCounter'
import Todo from './components/Todo'

class App extends Component {
  state = {
    todoList: [{ id: 0, text: 'First Task', complete: false }]
  }

  getUniqueID = () => {
    let ID
    if (this.state.todoList.length > 0) {
      ID = this.state.todoList[this.state.todoList.length - 1].id + 1
      console.log(ID)
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

  deleteTodo = (index) => {
    console.log(index)
    this.setState({
      todoList: this.state.todoList.splice(index, 1)
    })
  }

  render() {
    let { todoList } = this.state
    return (
      <div className="App">
        <h1>TodoList</h1>
        <TodoCounter todoList={todoList} />
        <TodoForm addNewTodo={this.addNewTodo} getUniqueID={this.getUniqueID} />
        <div className='todo-list'>
          <ul className='list'>
            {todoList.map((todo, index) =>
              <Todo
                key={index}
                todo={todo}
                toggleComplete={() => this.toggleComplete(todo.id)}
                deleteTodo={() => this.deleteTodo(index)}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;



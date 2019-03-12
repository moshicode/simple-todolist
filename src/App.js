import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoCounter from './components/TodoCounter'
import Todo from './components/Todo'

class App extends Component {
  state = {
    todoList: [{ text: 'First Task', complete: false }],
  }

  addNewTodo = todo => {
    this.setState({
      todoList: [...this.state.todoList, todo],
    })
  }

  toggleComplete = id => {
    this.setState({
      todoList: this.state.todoList.map((todo, indexOf) => {
        if (indexOf === id) {
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

  render() {
    let { todoList } = this.state
    return (
      <div className="App">
        <h1>TodoList</h1>
        <TodoCounter todoList={todoList} />
        <TodoForm addNewTodo={this.addNewTodo} />
        <div className='todo-list'>
          <ul className='list'>
            {todoList.map((todo, index) =>
              <Todo key={index} todo={todo} toggleComplete={() => this.toggleComplete(index)} />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;



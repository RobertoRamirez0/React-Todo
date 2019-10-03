import React, { Component } from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends Component {
  constructor() {
    super();
     this.state = {
       todo : [{
          task: '',
          completed: false,
          id: ''
       }]
     }
  }

  clearCompleted = (event) => {
    event.preventDefault();

    this.setState({
      todo: this.state.todo.filter(todo => {
        return todo.completed === false;
      })
    })
  }

  toggleToDo = (event, todoId) => {
    event.preventDefault();
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  addToDo = (e, toDoName) => {
    const newToDo = {
      task: toDoName,
      completed : false,
      id: Date.now()
    }

    this.setState({
      todo: [...this.state.todo, newToDo]
    })
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addToDo={this.addToDo}/>

        <div className='todo-list'>
          {this.state.todo.map(todo => (
            <Todo key={todo.id} todo={todo} onClick={e => this.toggleToDo(e, todo.id)}/>
          ))}

          <button onClick={this.clearCompleted}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;

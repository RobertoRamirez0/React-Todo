import React, { Component } from 'react'

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.addToDo(event, this.state.value);

    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
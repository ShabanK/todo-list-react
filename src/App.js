import React, { Component } from "react";
import TodoItem from "./components/ListItem.js";
import todosData from "./todosItem.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const update = prevState.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      });
      return { todos: update };
    });
  }
  render() {
    const todoItem = this.state.todos.map(item => {
      return (
        <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
      );
    });
    return <div className="todolist">{todoItem}</div>;
  }
}

export default App;

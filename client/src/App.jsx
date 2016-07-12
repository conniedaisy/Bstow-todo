import React from 'react';
import ReactDOM from 'react-dom';

import Todos from './Todos';

// require('../styles/style.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodos: [],
      newId: 0,
      newTitle: '',
      newDescription: '',
      newDueDate: '',
    };
  }

  handleTitleChange(e) {
    this.setState({
      newTitle: e.target.value,
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      newDescription: e.target.value,
    });
  }

  handleDueDateChange(e) {
    this.setState({
      newDueDate: e.target.value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      allTodos: [...this.state.allTodos, {
        id: this.state.newId,
        title: this.state.newTitle,
        description: this.state.newDescription,
        dueDate: this.state.newDueDate,
        completed: false,
      }],
    });
    this.state.newId++;
  }

  handleTodoItemToggle(id) {
    // const newTodos = this.state.allTodos.forEach(todo => {
    //   if (todo.id === todoId) {
    //     todo.completed = true;
    //   }
    // });
    // this.setState({
    //   allTodos: newTodos, 
    // });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleFormSubmit.bind(this)}>
          <input
            type="text" 
            name="title"
            placeholder="Item Title"
            onChange={this.handleTitleChange.bind(this)}/>
          <input
            type="text" 
            name="description"
            placeholder="Item Description"
            onChange={this.handleDescriptionChange.bind(this)}/>
          <input
            type="date" 
            name="title"
            placeholder="Item Due Date"
            onChange={this.handleDueDateChange.bind(this)}/>
          <input type="submit"/>
        </form>

        {this.state.allTodos ? 
          <Todos 
            allTodos={this.state.allTodos}
            handleTodoItemToggle={this.handleTodoItemToggle.bind(this)}/> : 
          <span></span>
        }

      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
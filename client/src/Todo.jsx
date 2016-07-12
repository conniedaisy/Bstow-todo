import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <input 
        type="checkbox"
        onChange={this.props.handleTodoItemToggle(this.props.id)}/>
      {this.props.completed ? 
        <strike>{this.props.title + ': ' + this.props.description}</strike> :
        <span>{this.props.title + ': ' + this.props.description}</span>}
    </div>
    );
  }
};

export default Todo;


import React from 'react';

import Todo from './Todo';

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.allTodos.map(todo => 
          <Todo 
            key={todo.id}
            {...todo}
            handleTodoItemToggle={this.props.handleTodoItemToggle}
          />
        )}
      </ul>
    );
  }
};

export default Todos;


import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newId: 0,
      newTitle: '',
      newDescription: '',
      newDueDate: '',
    }
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

  handleFormSubmit() {
    console.log('handleFormSubmit is called');
    // this.props.addTodo({
    //   id: this.state.newId,
    //   title: this.state.newTitle,
    //   description: this.state.newDescription,
    //   dueDate: this.state.newDueDate,
    // });
    
    this.state.id++;
  }

  render() {
    let id = 0, title, description, dueDate;
    return (
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
    );
  }
};
export default AddTodoForm;
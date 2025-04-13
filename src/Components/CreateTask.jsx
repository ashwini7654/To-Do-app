import React, { Component } from 'react'
import "./CreateTask.css"
export default class CreateTask extends Component {
    constructor(props) {
      super(props)
    
      this.state = {task:""}
    }
    handleSubmit=(e)=>{
      e.preventDefault();
      this.props.addTask(this.state.task);
      this.setState({task:""})
    }
    handleChange=(e)=>{
     this.setState({task:e.target.value})

    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input

            type="text" 
            value={this.state.task}
            onChange={this.handleChange}
            placeholder="Add Your Today Schedule">

         </input>
        
        <button className=" task add" type="submit">Add Task</button>
          
        </form>
      </div>
    )
  }
}

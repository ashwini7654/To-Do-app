import React, { Component } from 'react'
import "./TaskItem.css";
export default class TaskItem extends Component {
 constructor(props) {
   super(props)
 this.state={
  task:this.props.taskItem.taskName,
  isEditing:false
};
 }
 setIsEditing=(value)=>{
    this.setState({isEditing:value})
 }
 handleClick=(e)=>{
    this.props.deleteTask(this.props.id)
 }
 handleChange=(e)=> {
  this.setState({ task: e.target.value });
}
handleBack=(e)=>{
  
this.setState({
  task:this.props.taskItem.taskName,
  isEditting:false
});
}
handleSubmit=(e)=>{
e.preventDefault();
this.props.editTask(this.props.id,this.state.task)
this.setState({isEditing:false})
}
handleToggle=()=>{
  this.props.toggleTask(this.props.id);
}
 render() {
    let result;
    if (this.state.isEditing) {
      result =(
        <tr>
          <td colSpan="2">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.task}
                onChange={this.handleChange}
              />

              <span style={{ float: "right" }}>
                <button className=" task save" type="submit" >Save</button>
                <button className=" task back"  onClick={this.handleBack}>Back</button>
              </span>
            </form>
          </td>
        </tr>
      );
    } else {
      result = (
        <tr>
          <td className="task" onClick={this.handleToggle} >
            <input
             type="checkbox" 
             checked={this.props.taskItem.isCompleted}
              readOnly //hmlog checked se controled compnent bnnye h toh  readonly ya onclick lgne hoga  
              />
            <span className={this.props.taskItem.isCompleted ? "completed ":"not-completed"} >{this.props.taskItem.taskName}</span>
          </td>
          <td>
            <button className=" task edit "
              onClick={() => {
                this.setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button className=" task delete " onClick={this.handleClick}>Delete</button>
          </td>
        </tr>
      );
    }
    return result;
  }
}

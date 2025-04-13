import React, { Component } from 'react'
import CreateTask from './CreateTask'
import TaskList from './TaskList'
import "./Main.css"
export default class MainList extends Component {
    constructor(props) {
      super(props)
    this.state = {tasks:[] }
    
    }
  toggleTask=(index)=>{
    let arr=[...this.state.tasks];
    arr[index].isCompleted=!arr[index].isCompleted;
    this.setState({tasks:arr});

  }
  addTask=(task)=>{
     if(task.trim()=== ""){
        alert("You didn't added anything");
      return;
     }
     
    let newTask={taskName:task,isCompleted:false};
    let arr=[...this.state.tasks,newTask];
    this.setState({tasks:arr});
}
deleteTask=(index)=>{
    let arr=[...this.state.tasks];
    arr=arr.filter((task,pos)=>pos!==index);
    this.setState({tasks:arr});
}
editTask=(index,value)=>{
    let arr=[...this.state.tasks];
  arr[index].taskName=value;
  this.setState({tasks:arr});

}

  render() {
    return (
      <div  className="Main">
        <h1 style={{textAlign:'center'}}>To-Do List<br/></h1>
        <span style={{fontSize: '1.2em'}}>(You have to {this.state.tasks.length} task to do.)</span>
       
        <div className="content">
            <CreateTask addTask={this.addTask} />
            <TaskList 
            tasks={this.state.tasks} 
            deleteTask={this.deleteTask}
              editTask={this.editTask}
              toggleTask={this.toggleTask}
              addTask={this.addTask}

              />
        </div>
       
        
      </div>
    )
  }
}

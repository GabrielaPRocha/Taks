import React, { Component,Fragment } from 'react';
class Projects extends Component{
    state= {  }
    handleKeyPress(e){
       if(e.key === "Enter"){
           this.props.addProject({name: e.target.value})
       e.target.value = ""
    }
}
handeleClick(e){
    this.props.filter(e.target.innerHTML)
}
    render(){
        return( 
            <>
        <h3>Biblioteca</h3>
        <ul>
            {this.props.projects.map(project =>
            <li onClick={this.handleClick.bind(this)}>{project.name}</li>)}
        </ul>
            <input type="text" placeholder="adicionar projeto" onKeyPress={this.handleKeyPress.bind(this)}/>
            </>
        );
}
}
export default Projects;
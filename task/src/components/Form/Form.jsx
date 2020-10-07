import React, { Component } from "react"
import './style.css'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            sinopsys:"",
            status:0,
            project:""
        };
    }
    handleChangeTitle(event){
     this.setState({title: event.target.value })
    }
    handleChangeSinopsys(event){
        this.setState({sinopsys: event.target.value })
       }
       handleChangeProject(event){
        this.setState({project: event.target.value })
       }
       handleSubmit(event){
        event.preventDefault()
      this.props.addTask(this.state)
}
    render() { 
        return (
            <form className='form' onSubmit={this.handleSubmit.bind(this)}>
                <input type="text"
                 placeholder="Titulo"
                  onChange={this.handleChangeTitle.bind(this)}
                  />
                <textarea placeholder="Sinopse" onChange={this.handleChangeSinopsys.bind(this)}/>
                <select   onChange={this.handleChangeProject.bind(this)}>{this.props.projects.map(project =><option>{project.name}</option>)}</select>
                <button className="btn-bg">Salvar</button>
                </form>
          );
    }
}
 
export default Form;
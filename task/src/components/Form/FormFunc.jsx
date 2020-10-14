import React from 'react';
import { useState } from 'react';
import './style.css'

const Form  = (props) => {
       const [title,setTitle] = useState();
       const [sinopsys,setSinopsys] = useState();
       const [status,setStatus] = useState(0);
       const [project, setProject] = useState();      
       
       const handleSubmit = e =>{

        e.preventDefault()
        const task = {id: Date.now(),title,sinopsys,status,project}
        props.addTask(task)

       }
       return (
        <form className='form' onSubmit={handleSubmit}>
        <input
        value = {title}
        type="text"
         placeholder="Titulo"
         onChange={e => setTitle(e.target.value)}
          />
        <textarea placeholder="Sinopse" 
        onChange={e => setSinopsys(e.target.value)}
        />
        <select  onChange={e => setProject(e.target.value)}>
        {props.projects.map(project =>
        <option key={project.name}>{project.name}</option>)
        }
        </select>
        <button >Salvar</button>
        </form> 
         );
    }
     
    export default Form; 
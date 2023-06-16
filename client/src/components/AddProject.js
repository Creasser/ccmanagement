import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Error from "./Error";
import { v4 as uuidv4 } from 'uuid'

function AddProject({ handleNewProject }){
    const [errors, setErrors] = useState([])
    const [newProject, setNewProject] = useState({
        project_title: '',
        description: '',
        start_date: '',
        deadline: '',
        price: 0,
    })

    const history = useHistory()

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setNewProject({
            ...newProject,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(newProject)
        
        fetch('/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                project_title: newProject.project_title,
                description: newProject.description,
                start_date: newProject.start_date,
                deadline: newProject.deadline,
                price: parseInt(newProject.price)
            })
        }).then((r) => {
            if(r.ok){
                r.json().then((project) => {
                    handleNewProject(project)
                    history.push('/availableprojects')
                })
            }
            else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
    
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="project_title"
                    value={newProject.project_title}
                    placeholder="Enter Project Title"
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    name="description"
                    value={newProject.description}
                    placeholder="Enter Description"
                    onChange={handleChange}
                ></input>
                <input
                    type="date"
                    name="start_date"
                    value={newProject.start_date}
                    placeholder="Enter Start Date"
                    onChange={handleChange}
                ></input>
                <input
                    type="date"
                    name="deadline"
                    value={newProject.deadline}
                    placeholder="Enter Deadline"
                    onChange={handleChange}
                ></input>
                <input
                    type="number"
                    name="price"
                    value={newProject.price}
                    placeholder="Enter Price"
                    onChange={handleChange}
                ></input>
                <input
                    type="submit"
                    name="submit"
                ></input>
            </form>
            <div>
                {errors ? 
                    errors.map((err) => {
                        return <Error key={uuidv4()} err={err} />
                    })
                : 
                null}
            </div>
        </div>
    )
}

export default AddProject
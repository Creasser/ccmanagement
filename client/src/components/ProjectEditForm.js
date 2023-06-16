import React, { useState } from "react";
import Error from "./Error";
import { v4 as uuidv4 } from 'uuid'

function ProjectEditForm({ project, onUpdate, setForm }){
    const [errors, setErrors] = useState([])
    const [updatedProject, setUpdatedProject] = useState({
        project_title: project.project_title,
        description: project.description,
        start_date: project.start_date,
        deadline: project.deadline,
        price: project.price,
    })

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setUpdatedProject({
            ...updatedProject,
            [name]: value
        })
    }


    function handleSubmit(e){
        e.preventDefault()
        fetch(`/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                project_title: updatedProject.project_title,
                description: updatedProject.description,
                start_date: updatedProject.start_date,
                deadline: updatedProject.deadline,
                price: updatedProject.price,
            })
        }).then((r) => {
            if (r.ok){
                r.json().then((upProject) => {
                    onUpdate(upProject)
                    setForm(false)
                    
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
                    value={updatedProject.project_title}
                    placeholder="Enter Project Title"
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    name="description"
                    value={updatedProject.description}
                    placeholder="Enter Description"
                    onChange={handleChange}
                ></input>
                <input
                    type="date"
                    name="start_date"
                    value={updatedProject.start_date}
                    placeholder="Enter Start Date"
                    onChange={handleChange}
                ></input>
                <input
                    type="date"
                    name="deadline"
                    value={updatedProject.deadline}
                    placeholder="Enter Deadline"
                    onChange={handleChange}
                ></input>
                <input
                    type="number"
                    name="price"
                    value={updatedProject.price}
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

export default ProjectEditForm
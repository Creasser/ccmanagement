import React, { useState } from "react";
import ProjectEditForm from "./ProjectEditForm";

function ProjectCard({ project, company, user, onDelete, onUpdate }){
    const [editForm, setEditForm] = useState(false)

    function handleDelete(id){
        fetch(`/projects/${id}`, {
            method: 'DELETE'
        }).then((r) => {
            if (r.ok){
                onDelete(id)
            }
        })
    }

    //UPDATE
    //need to make a form pop up, use the ternary op
    //project data needs to prefill the form
    //make the form controlled

    // function handleUpdate(){

    // }

    return(
        <div>
            <h1>{project.project_title}</h1>
            <p>{project.description}</p>
            <h2>{project.start_date}</h2>
            <h2>{project.deadline}</h2>
            <h2>{project.price}</h2>
            {user.description ? 
                company === user.id ?
                <div>
                    <button onClick={() => handleDelete(project.id)}>Delete</button>
                    <button onClick={() => setEditForm(!editForm)}>Edit</button>
                </div>
            : 
                null
            :
                null
            }
            {editForm ? <ProjectEditForm project={project} onUpdate={onUpdate} setForm={setEditForm} /> : null}
        </div>
        
    )
}

export default ProjectCard
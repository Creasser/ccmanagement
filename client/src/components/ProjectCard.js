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
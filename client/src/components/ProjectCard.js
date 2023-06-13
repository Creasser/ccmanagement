import React, { useState, useContext } from "react";
import { UserContext } from "./Context";
import ProjectEditForm from "./ProjectEditForm";

function ProjectCard({ project, company, onDelete, onCompUpdate, onAccepted }){
    const {user} = useContext(UserContext);
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

    function handleContUpdate(id){
        fetch(`/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contractor_id: user.id
            })
        }).then((r) => {
            if(r.ok){
                r.json().then((p) => {
                    console.log(p)
                    onAccepted(p)
                })
            }
            else{
                r.json().then((r) => console.log(r))
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
                <button onClick={() => handleContUpdate(project.id)}>Accept Project</button>
            }
            {editForm ? <ProjectEditForm project={project} onUpdate={onCompUpdate} setForm={setEditForm} /> : null}
        </div>
        
    )
}

export default ProjectCard
import React from "react";
import ProjectCard from "./ProjectCard";

function AvailableProjects({ projects, user, onDelete }){

    if (!projects){
        return <h1>Loading...</h1>
    }


    const projectsElements = projects.map((project) => {
        return <ProjectCard key={project.id} project={project} company={project.company_id} user={user} onDelete={onDelete} />
    })

    //need to pass projects down to this compoent, then pass to project card component.
    //Need to map over the projects and create a card for each of the projects


    return(
        <div>
            <h1>Available Projects</h1>
            <div>{projectsElements}</div>
        </div>
    )
}

export default AvailableProjects
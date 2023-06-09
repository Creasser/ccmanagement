import React, { useContext } from "react";
import { UserContext } from "./Context";
import ProjectCard from "./ProjectCard";

function AvailableProjects({ projects, onDelete, onCompUpdate, onAccepted }){
    const {user} = useContext(UserContext);
    if (!projects){
        return <h1>Loading...</h1>
    }

    const projectsToDisplay = projects.filter((project) => {
        return !project.contractor_id
    })

    const projectsElements = projectsToDisplay.map((project) => {
        return <ProjectCard 
        key={project.id} 
        project={project} 
        company={project.company_id} 
        user={user} 
        onDelete={onDelete} 
        onCompUpdate={onCompUpdate}
        onAccepted={onAccepted} />
    })

    

    //need to pass projects down to this compoent, then pass to project card component.
    //Need to map over the projects and create a card for each of the projects


    return(
        <div>
            <h1>Available Projects</h1>
            <div className="projectContainer">{projectsElements}</div>
        </div>
    )
}

export default AvailableProjects
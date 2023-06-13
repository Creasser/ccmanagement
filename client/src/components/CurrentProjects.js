import React from "react";
import CurrentProjectCard from "./CurrentProjectCard";


function CurrentProjects({ user }){

    const userProjects = user.projects.map((project) => {
        return <CurrentProjectCard
        key={project.id}
        title={project.project_title}
        start={project.start_date}
        deadline={project.deadline}
        description={project.description}
        price={project.price} 
        />
    })

    return(
        <div>
            <h1>Current Projects</h1>
            {userProjects}
        </div>
    )
}

export default CurrentProjects
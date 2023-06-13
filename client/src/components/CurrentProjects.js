import React, { useContext } from "react";
import { UserContext } from "./Context";
import CurrentProjectCard from "./CurrentProjectCard";


function CurrentProjects(){
    const {user} = useContext(UserContext);

    if (!user.projects){
        return null
    }

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
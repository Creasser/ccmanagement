import React from "react";
import CurrentProjects from "./CurrentProjects";

function CompanyUserHome({ user }){

    return(
        <div>
            <h1>{`Welcome, ${user['company_name']}`}</h1>
            <p>{user.description}</p>
            <CurrentProjects user={user} />
        </div>
    )
}

export default CompanyUserHome
import React, { useContext } from "react";
import { UserContext } from "./Context";
import CurrentProjects from "./CurrentProjects";

function CompanyUserHome(){
    const {user} = useContext(UserContext);

    return(
        <div>
            <h1>{`Welcome, ${user['company_name']}`}</h1>
            <p>{user.description}</p>
            <CurrentProjects user={user} />
        </div>
    )
}

export default CompanyUserHome
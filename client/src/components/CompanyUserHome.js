import React, { useContext } from "react";
import { UserContext } from "./Context";
import CurrentProjects from "./CurrentProjects";
import AssociatedContractors from "./AssociatedContractors";

function CompanyUserHome(){
    const {user} = useContext(UserContext);

    return(
        <div>
            <h1>{`Welcome, ${user['company_name']}`}</h1>
            <p>{user.description}</p>
            <CurrentProjects user={user} />
            <AssociatedContractors />
        </div>
    )
}

export default CompanyUserHome
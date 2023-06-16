import React, { useContext } from "react";
import { UserContext } from "./Context";
import CurrentProjects from "./CurrentProjects";
import AssociatedCompanies from "./AssociatedCompanies";

function ContractorUserHome(){
    const {user} = useContext(UserContext);

    return(
        <div>
            <h1>{`Welcome, ${user['first_name']} ${user['last_name']} `}</h1>
            <p>{user.bio}</p>
            <CurrentProjects />
            <AssociatedCompanies />
        </div>
    )
}

export default ContractorUserHome
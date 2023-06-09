import React from "react";
import CurrentProjects from "./CurrentProjects";

function ContractorUserHome({ user }){

    return(
        <div>
            <h1>{`Welcome, ${user['first_name']} ${user['last_name']} `}</h1>
            <p>{user.bio}</p>
            <CurrentProjects user={user} />
        </div>
    )
}

export default ContractorUserHome
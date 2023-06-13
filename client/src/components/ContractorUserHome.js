import React, { useContext } from "react";
import { UserContext } from "./Context";
import CurrentProjects from "./CurrentProjects";

function ContractorUserHome(){
    const {user} = useContext(UserContext);

    return(
        <div>
            <h1>{`Welcome, ${user['first_name']} ${user['last_name']} `}</h1>
            <p>{user.bio}</p>
            <CurrentProjects user={user} />
        </div>
    )
}

export default ContractorUserHome
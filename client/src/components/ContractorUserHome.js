import React from "react";

function ContractorUserHome({ user }){

    return(
        <div>
            <h1>{`Welcome, ${user['first_name']} ${user['last_name']} `}</h1>
            <p>{user.bio}</p>
        </div>
    )
}

export default ContractorUserHome
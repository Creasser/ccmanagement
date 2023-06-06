import React from "react";

function CompanyUserHome({ user }){

    return(
        <div>
            <h1>{`Welcome, ${user['company_name']}`}</h1>
            <p>{user.description}</p>
        </div>
    )
}

export default CompanyUserHome
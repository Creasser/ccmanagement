import React from "react";

function CurrentProjectCard({ title, start, deadline, description, price}){

    return(
        <div className="projectCard">
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>{`Start Date: ${start}`}</h3>
            <h3>{`Deadline: ${deadline}`}</h3>
            <h3>{`$${price}`}</h3>
        </div>
    )
}

export default CurrentProjectCard
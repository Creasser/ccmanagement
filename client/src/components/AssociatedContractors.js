import React, { useContext } from "react";
import { UserContext } from "./Context";
import AssociatedContractorsCard from "./AssociatedContractorsCard";
import { v4 as uuidv4 } from 'uuid'

function AssociatedContractors(){
    const { user } = useContext(UserContext)

    const contractorsToDisplay = user.contractors.map((contractor) => {
        return <AssociatedContractorsCard contractor={contractor} key={uuidv4()} />
    })

    return(
        <div>
            <h1>Associated Contractors</h1>
            <div className="associatedUserContainer">
                {contractorsToDisplay}
            </div>
        </div>
    )
}

export default AssociatedContractors
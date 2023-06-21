import React, { useContext } from "react";
import { UserContext } from "./Context";
import AssociatedCompaniesCard from "./AssociatedCompaniesCard";
import { v4 as uuidv4 } from 'uuid'

function AssociatedCompanies(){
    const { user } = useContext(UserContext)

    if(!user.companies){
        return <h1>Loading...</h1>
    }

    const companiesToDisplay = user.companies.map((company) => {
       return <AssociatedCompaniesCard company={company} key={uuidv4()} />
    })


    return(
        <div>
            <h1>Associated Companies</h1>
            <div className="associatedUserContainer">
                {companiesToDisplay}
            </div>
        </div>
    )
}

export default AssociatedCompanies
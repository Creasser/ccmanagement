import React, { useContext } from "react";
import { UserContext } from "./Context";
import AssociatedCompaniesCard from "./AssociatedCompaniesCard";
import { v4 as uuidv4 } from 'uuid'

function AssociatedCompanies(){
    const { user } = useContext(UserContext)

    const companiesToDisplay = user.companies.map((company) => {
       return <AssociatedCompaniesCard company={company} key={uuidv4()} />
    })


    return(
        <div>
            {companiesToDisplay}
        </div>
    )
}

export default AssociatedCompanies
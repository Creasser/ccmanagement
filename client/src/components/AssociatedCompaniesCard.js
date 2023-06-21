import React from "react";

function AssociatedCompaniesCard({ company }){

    return(
        <div className="associatedUser">
            <h2>{company['company_name']}</h2>
        </div>
    )
}

export default AssociatedCompaniesCard
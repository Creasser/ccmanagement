import React from "react";
import CompanyUserHome from "./CompanyUserHome";
import ContractorUserHome from "./ContractorUserHome";

function UserHomePage({user, setUser}){


    return(
        <div>
          {user.description ? 
            <CompanyUserHome user={user}/> 
          : 
            <ContractorUserHome user={user}/>  
          }  
        </div>         
    )
}

export default UserHomePage
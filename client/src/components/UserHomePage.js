import React, { useContext } from "react";
import { UserContext } from "./Context";
import CompanyUserHome from "./CompanyUserHome";
import ContractorUserHome from "./ContractorUserHome";

function UserHomePage(){
  const {user} = useContext(UserContext);

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
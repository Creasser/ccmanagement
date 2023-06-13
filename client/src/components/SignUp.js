import React, { useState } from "react";
import CompanySignup from "./CompanySignup";
import ContractorSignup from "./ContractorSignup";
import { Link } from "react-router-dom";

function SignUp(){
    const [userType, setUserType] = useState(false)

    return (
        <div>
            <h1>{`${userType ? 'Company' : 'Contractor'} Sign Up!`}</h1>
            <button onClick={() => setUserType(!userType)}>{userType ? 'Contractor Sign Up' : 'Company Sing Up'}</button>
            <div>{userType ? <CompanySignup /> : <ContractorSignup />}</div>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default SignUp
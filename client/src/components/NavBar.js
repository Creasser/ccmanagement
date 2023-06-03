import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user }){

    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/availableprojects'>Available Projects</Link>
            { user ? 
                user.description ? 
                    <div>
                        <Link to='/currentprojects'>Current Projects</Link>
                        <Link to='/newprojects'>New Projects</Link>
                    </div>
                    :
                    <Link to='/currentprojects'>Current Projects</Link> 
                    :
                null}
            {/* { user['company_name'] ? 
                <Link to='/newproject'>New Project</Link> 
                : 
                null} */}
        </div>
    )
}

export default NavBar
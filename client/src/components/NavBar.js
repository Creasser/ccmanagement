import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user }){

    return(
        <div>
            {/* <Link to='/'>Home</Link>
            <Link to='/availableprojects'>Available Projects</Link> */}
            { user ? 
                user.description ? 
                    <div>
                        <Link to='/'>Home</Link>
                        <Link to='/availableprojects'>Available Projects</Link>
                        <Link to='/currentprojects'>Current Projects</Link>
                        <Link to='/newprojects'>New Projects</Link>
                    </div>
                    :
                    <div>
                        <Link to='/'>Home</Link>
                        <Link to='/availableprojects'>Available Projects</Link>
                        <Link to='/currentprojects'>Current Projects</Link> 
                    </div>
                    :
                null}
        </div>
    )
}

export default NavBar
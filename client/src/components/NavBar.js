import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }){

    function handleLogoutClick() {
        if(user['company_name']){
          fetch("/companylogout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
        }
        else {
          fetch("/contractorlogout", { method: "DELETE" }).then((r) => {
            if (r.ok){
              setUser(null)
            }
          });
        }}

    return(
        <div>

            { user ? 
                user.description ? 
                    <div>
                        <Link to='/'>Home</Link>
                        <Link to='/availableprojects'>Available Projects</Link>
                        <Link to='/currentprojects'>Current Projects</Link>
                        <Link to='/addproject'>Add Project</Link>
                        <button onClick={handleLogoutClick}>Logout</button>
                    </div>
                    :
                    <div>
                        <Link to='/'>Home</Link>
                        <Link to='/availableprojects'>Available Projects</Link>
                        <Link to='/currentprojects'>Current Projects</Link> 
                        <button onClick={handleLogoutClick}>Logout</button>
                    </div>
                :
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/availableprojects'>Available Projects</Link>
                </div>
            }
        </div>
    )
}

export default NavBar
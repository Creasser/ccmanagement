import React from "react";
import { Link, useHistory } from "react-router-dom";

function NavBar({ user, setUser }){

  const history = useHistory()

    function handleLogoutClick() {
        if(user['company_name']){
          fetch("/companylogout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              history.push('/')
              setUser(null)
            }
          });
        }
        else {
          fetch("/contractorlogout", { method: "DELETE" }).then((r) => {
            if (r.ok){
              history.push('/')
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
                </div>
            }
        </div>
    )
}

export default NavBar
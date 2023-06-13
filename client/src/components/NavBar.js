import React, { useContext } from "react";
import { UserContext } from "./Context";
import { Link, useHistory } from "react-router-dom";

function NavBar(){
  const {user, setUser} = useContext(UserContext);

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

        function log(){
          console.log(user)
        }

    return(
        <div>
          <button onClick={log}>Log</button>
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
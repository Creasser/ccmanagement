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

    return(
        <div>
            { user ? 
                user.description ? 
                    <div className="navbar">
                        <Link className="navLinks" to='/'>Home</Link>
                        <Link className="navLinks" to='/availableprojects'>Available Projects</Link>
                        <Link className="navLinks" to='/addproject'>Add Project</Link>
                        <button onClick={handleLogoutClick}>Logout</button>
                    </div>
                    :
                    <div className="navbar">
                        <Link className="navLinks" to='/'>Home</Link>
                        <Link className="navLinks" to='/availableprojects'>Available Projects</Link>
                        <button onClick={handleLogoutClick}>Logout</button>
                    </div>
                :
                <div className="navbar">
                    <Link className="navLinks" to='/'>Home</Link>
                    <Link className="navLinks" to='/companylogin'>Login</Link>
                    <Link className="navLinks" to='/signup'>Sign Up</Link>
                </div>
            }
        </div>
    )
}

export default NavBar
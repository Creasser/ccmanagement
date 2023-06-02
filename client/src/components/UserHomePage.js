import React from "react";

function UserHomePage({user, setUser}){

    function handleLogoutClick() {
        fetch("/companylogout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return(
        <div>
            <h1>{user['company_name']}</h1>
            <h4>{user.username}</h4>
            <button onClick={handleLogoutClick}>Logout</button>
            
        </div>         
    )
}

export default UserHomePage
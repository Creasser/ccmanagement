import React from 'react';
import { Link } from 'react-router-dom';


function Home ({ user }){
   // const user = useContext(UserContext)

    return (
        <div>
            <Link to='/companylogin'>Company Login</Link>
            <Link to='/contractorlogin'>Contractor Login</Link>
            <button onClick={() => console.log(user)}>Click me</button>
            <div>{user['company_name']}</div>
        </div>
    )
}

export default Home
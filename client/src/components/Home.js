import React from 'react';
import { Link } from 'react-router-dom';


function Home ({ user }){
   // const user = useContext(UserContext)

    return (
        <div>
            <Link to='/companylogin'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
        </div>
    )
}

export default Home
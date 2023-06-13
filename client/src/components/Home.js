import React from 'react';
import { Link } from 'react-router-dom';


function Home (){
   
    return (
        <div>
            <Link to='/companylogin'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
        </div>
    )
}

export default Home
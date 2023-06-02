import React from 'react';
import { Link } from 'react-router-dom';


function Home ({ user }){
   // const user = useContext(UserContext)

    return (
        <div>
            <Link to='/companylogin'>Company Login</Link>
            <Link to='/contractorlogin'>Contractor Login</Link>
        </div>
    )
}

export default Home
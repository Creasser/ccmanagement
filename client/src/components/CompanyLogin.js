import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function CompanyLogin() {
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: '',
    })

    const history = useHistory()

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        //console.log(userLogin)
        fetch('/companylogin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userLogin.username,
                password: userLogin.password
            })
        }).then((r) => {
            if (r.ok){
                r.json().then((user) => {
                    history.push('/')
                    console.log(user)})
            }
            else {
                r.json().then((res) => console.log(res))
            }
        })
    }

    return(
        <div>
            <h1>Company Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="username"
                value={userLogin.username}
                placeholder="Enter Username"
                onChange={handleChange}
                ></input>
                <input 
                type="text"
                name="password"
                value={userLogin.password}
                placeholder="Enter Password"
                onChange={handleChange}
                ></input>
                <input 
                type="submit"
                name="submit"
                ></input>
            </form>
            <Link to='/companysignup'>Sign Up for Companies</Link>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default CompanyLogin
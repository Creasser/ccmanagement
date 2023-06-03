import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login({ setUser }) {
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: '',
        company: false,
        contractor: false
    })

    const history = useHistory()

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        if (e.target.type === 'checkbox'){
            value = e.target.value
        }

        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    function handleUserLoginType(e){
        if(e.target.name === 'contractor'){
            setUserLogin({
                ...userLogin,
                contractor: !userLogin.contractor
            })
        }
        else{
            setUserLogin({
                ...userLogin,
                company: !userLogin.company
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if(userLogin.contractor){
            return console.log(userLogin)
        }
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
                    setUser(user)
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
                <label htmlFor="Company">
                    <input
                    type="checkbox"
                    name="company"
                    onChange={handleUserLoginType}
                    checked={userLogin.company}
                    ></input>
                    Company
                </label>
                <label htmlFor="Contractor">
                    <input
                    type="checkbox"
                    name="contractor"
                    onChange={handleUserLoginType}
                    checked={userLogin.contractor}
                    ></input>
                    Contractor
                </label>
                <input 
                type="submit"
                name="submit"
                ></input>
            </form>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default Login
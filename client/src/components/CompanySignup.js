import React, { useState } from "react";

function CompanySignup() {
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: '',
        password_confirmation: ''
    })

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
        console.log(userLogin)
    }

    return (
        <div>
            <div>Hello</div>
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
                type="text"
                name="password_confirmation"
                value={userLogin.password_confirmation}
                placeholder="Confirm Password"
                onChange={handleChange}
                ></input>
                <input 
                type="submit"
                name="submit"
                ></input>
            </form>
        </div>
    )
}

export default CompanySignup
import React, { useState, useContext } from "react";
import { UserContext } from "./Context";
import { useHistory } from "react-router-dom";

function CompanySignup() {
    const {setUser} = useContext(UserContext);
    const [userSignup, setUserSignup] = useState({
        username: '',
        password: '',
        password_confirmation: '',
        company_name: '',
        description: ''
    })

    const history = useHistory()

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value
        setUserSignup({
            ...userSignup,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        //console.log(userSignup)
        fetch("/companysignup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userSignup.username,
                password: userSignup.password,
                password_confirmation: userSignup.password_confirmation,
                company_name: userSignup.company_name,
                description: userSignup.description
            })
        }).then((r) => {
            if (r.ok){
                r.json().then((user) => {
                    setUser(user)
                    history.push('/')
                    console.log(user)
                })
            }
            else {
                console.log('This is not working')
            }
        })
    }

    return (
        <div>
            <div>Company Signup</div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="username"
                value={userSignup.username}
                placeholder="Enter Username"
                onChange={handleChange}
                ></input>
                <input 
                type="text"
                name="password"
                value={userSignup.password}
                placeholder="Enter Password"
                onChange={handleChange}
                ></input>
                <input 
                type="text"
                name="password_confirmation"
                value={userSignup.password_confirmation}
                placeholder="Confirm Password"
                onChange={handleChange}
                ></input>
                <input
                type="text"
                name="company_name"
                value={userSignup.company_name}
                placeholder="Enter Company Name"
                onChange={handleChange}
                ></input>
                <input
                type="text"
                name="description"
                value={userSignup.description}
                placeholder="Enter Company Description"
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
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ContractorSignup(){
    const [userSignup, setUserSignup] = useState({
        username: '',
        password: '',
        password_confirmation: '',
        first_name: '',
        last_name: '',
        bio: ''
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
        fetch("/contactorsignup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userSignup.username,
                password: userSignup.password,
                password_confirmation: userSignup.password_confirmation,
                first_name: userSignup.first_name,
                last_name: userSignup.last_name,
                bio: userSignup.bio
            })
        }).then((r) => {
            if (r.ok){
                r.json().then((user) => {
                    history.push('/')
                    console.log(user)
                })
            }
            else {
                console.log('This is not working - Contractor Signup')
            }
        })
    }

    return (
        <div>
            <div>Contractor Signup</div>
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
                name="first_name"
                value={userSignup.first_name}
                placeholder="Enter First Name"
                onChange={handleChange}
                ></input>
                 <input
                type="text"
                name="last_name"
                value={userSignup.last_name}
                placeholder="Enter Last Name"
                onChange={handleChange}
                ></input>
                <input
                type="text"
                name="bio"
                value={userSignup.bio}
                placeholder="Enter Company bio"
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

export default ContractorSignup
import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    
    const onChange =(e)=>{
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }


    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(credentials);
        axios.post('localhost:6969/api/auth/', credentials)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    
    return (
        <div>
            <form onSubmit ={onSubmit}>
                <label>Username :
                    <input 
                        type="text"
                        name = 'username'
                        value = {credentials.username}
                        onChange = {onChange}
                    />
                </label>

                <label>Password : 
                    <input 
                        type="password"
                        name = 'password'
                        value = {credentials.password}
                        onChange = {onChange}
                    />
                </label>

                <button>Log In</button>
            </form>
        </div>
    )
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    // ---------------------------------------- STATES ----------------------------------------
    const [first_name, setFirstname] = useState('')
    const [last_name, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    // ---------------------------------------- FUNCTIONS ----------------------------------------
    const handleRegister = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                email: email,
                username: username,
                password: password
            })

        }).then(response => response.json())
            .then(result => {
                console.log(result)
                navigate('/login')
            })
    }

    return (
        <>
            <h1>Registration</h1>
            <form onSubmit={handleRegister}>
                <input minLength={2} maxLength={16} required type='text' name='first_name' placeholder='Enter First Name' onChange={(e) => setFirstname(e.target.value)} />
                <input minLength={2} maxLength={16} required type='text' name='last_name' placeholder='Enter Last Name' onChange={(e) => setLastname(e.target.value)} />
                <input minLength={2} maxLength={16} required type='text' name='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
                <input minLength={2} maxLength={16} required type='text' name='username' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} />
                <input minLength={2} maxLength={16} required type='text' name='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                <button>Register</button>
            </form>
        </>
    )
}

export default Register
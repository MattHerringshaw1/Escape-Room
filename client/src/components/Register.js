import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/register.css'

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
            <div className='main-container-register'>
                <div className='main-container-title-register'>
                    <h1>Registration Page</h1>
                </div>
                <div className='main-container-body-register'>
                    <form onSubmit={handleRegister}>
                        <div className='main-container-input-register'>
                            <input minLength={2} maxLength={16} required type='text' name='first_name' placeholder='Enter First Name' onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className='main-container-input-register'>
                            <input minLength={2} maxLength={16} required type='text' name='last_name' placeholder='Enter Last Name' onChange={(e) => setLastname(e.target.value)} />
                        </div>
                        <div className='main-container-input-register'>
                            <input minLength={2} maxLength={16} required type='text' name='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='main-container-input-register'>
                            <input minLength={2} maxLength={16} required type='text' name='username' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='main-container-input-register'>
                            <input minLength={2} maxLength={16} required type='text' name='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='main-container-input-register'>
                            <button>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
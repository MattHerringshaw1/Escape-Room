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
            <div className='background-reg'>
                <div className='main-lb-body-reg'>
                    <div className='leadheader-reg'>
                        <h1>Registration Page</h1>
                    </div>
                    <div className='rendered-body-reg'>
                        <form onSubmit={handleRegister}>
                            <div className='form-center'>
                                <div className='rendered-text-reg-1'>
                                    <input minLength={2} maxLength={50} required type='text' name='first_name' placeholder='Enter First Name' onChange={(e) => setFirstname(e.target.value)} />
                                </div>
                                <div className='rendered-text-reg-2'>
                                    <input minLength={2} maxLength={50} required type='text' name='last_name' placeholder='Enter Last Name' onChange={(e) => setLastname(e.target.value)} />
                                </div>
                                <div className='rendered-text-reg-3'>
                                    <input minLength={2} maxLength={50} required type='text' name='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='rendered-text-reg-4'>
                                    <input minLength={2} maxLength={50} required type='text' name='username' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className='rendered-text-reg-5'>
                                    <input minLength={2} maxLength={50} required type='password' name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className='rendered-text-reg-button'>
                                    <button className='rendered-text-reg-button2'>Register <span></span><span></span><span></span><span></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Register
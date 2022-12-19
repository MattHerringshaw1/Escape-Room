import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

function Login(props) {

    // ---------------------------------------- STATES ----------------------------------------
    const [user, setUser] = useState({})

    const navigate = useNavigate()

    // ---------------------------------------- FUNCTIONS ----------------------------------------
    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(response => response.json())
          .then(result => {
            console.log(result)
            if (result.success) {
              const token = result.token
              const username = result.username
              const userId = result.userId
    
              localStorage.setItem('jwt', token)
              localStorage.setItem('username', username)
              localStorage.setItem('userid', userId)
    
              props.onLogin(token)
              navigate(`/dashboard/${userId}`)
            }
          })
      };
    return (
        <>
        <h1>Login Page</h1>
            <input name = "username" type = "text" placeholder = "Enter username" onChange={handleOnChange} /> 
            <input  name = "password" type = "text" placeholder = "Enter password" onChange={handleOnChange}/>
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (token) => dispatch({type: 'ON_LOGIN', payload: token})
    }
}

export default connect(null, mapDispatchToProps)(Login)
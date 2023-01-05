import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/login.css'
import  UserModal  from './UserModal.js'


function Login(props) {

    // ---------------------------------------- STATES ----------------------------------------
    const [user, setUser] = useState({})
    const [modalShow, setModalShow] = React.useState(false)
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
              navigate(`/home/${username}`)
            } 
          //   else if (user.username === null || user.username !== user.username || user !== user )  {
          //     // console.log(typeof(user.username))
          //     console.log(user.username)
          //     setModalShow(true)
            
          // }
             else {
              setModalShow(true)
            }
              // alert('Please provide correct credentials.')
            
      })}

      const handleGuestSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/api/guest-login', {
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
              navigate(`/home/${username}`)
            } 
          })
      }



    return (
        <>
          <div className='main-container-login'>

            <div className='main-container-title-login'>
                <h1>Login Page</h1>
            </div>

            <div className='main-container-body-login'>
              
                <form onSubmit={handleSubmit}>
                  <div className='form-center' >
                    <div className='main-container-input-login'>
                      <input minLength={2} maxLength={50} required name = "username" type = "text" placeholder = "Enter username" onChange={handleOnChange} /> 
                    </div>
                    <div className='main-container-input-login'>
                      <input minLength={2} maxLength={50} required name = "password" type = "password" placeholder = "Enter password" onChange={handleOnChange} />
                    </div>
                    <div className='main-container-input-login'>
                      <button >Login</button>
                    </div>
                    <div>
                      {modalShow ? <UserModal 
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      /> : null}
                    </div> 
                  </div>
                </form>
                
                <form onSubmit={handleGuestSubmit}> 
                  <div className='form-center'>
                    <div className='main-container-input-login'>             
                      <input type="hidden" value="Guest" name="username"  />
                      <button>Guest Login</button> 
                    </div>  
                  </div>
                </form>
              
            </div>
          </div>
 
          
        




        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (token) => dispatch({type: 'ON_LOGIN', payload: token})
    }
}

export default connect(null, mapDispatchToProps)(Login)
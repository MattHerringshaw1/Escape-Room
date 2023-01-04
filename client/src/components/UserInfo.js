import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/userinfo.css'


function UserInfo() {

    const [userInfo, setUserInfo] = useState([])
    let { userid } = useParams()

    const [user, setUser] = useState({})
    const userId = localStorage.getItem('userid')

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    const fetchUser = () => {
        fetch(`http://localhost:8080/api/view-info/${userid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`,
            }
        })


            .then(response => response.json())
            .then(result => {
                if (result.error) {
                    // console.log(result.error)
                } else {
                    setUserInfo(result)
                }
            })
        // console.log(result)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const handleEdit = (e) => {

        e.preventDefault()

        if (!user.first_name || !user.last_name || !user.email || !user.username) {
            alert('Please fill out all textboxes.')
        } else {
            fetch('http://localhost:8080/api/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    username: user.username,
                    userid: userId
                })
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                })
                fetchUser()
        }
    }

    fetchUser()

    return (
        <>
        <div className='main-container-user'>
            <div className='main-container-title-user'>
                <h1>View User Details Below</h1>
            </div>
            <div className='main-container-body-user'>
                <div className='main-container-ul-user'>
                    <div>
                        <p className='main-container-input-ul-user'><u>First Name</u>: {userInfo.first_name}</p>
                        <p className='main-container-input-ul-user'><u>Last Name</u>: {userInfo.last_name}</p>
                        <p className='main-container-input-ul-user'><u>Email</u>: {userInfo.email}</p>
                        <p className='main-container-input-ul-user'><u>Username</u>: {userInfo.username}</p>
                    </div>
                </div>
                <div className='main-container-ul-user' key={user.userid}>
                    <form onSubmit={handleEdit}>
                        <div className='form-center'>
                            <div className='main-container-input-user'>
                                <input minLength={2} maxLength={50} required type='text' name='first_name' placeholder='Enter First Name' onChange={handleChange} />
                            </div>
                            <div className='main-container-input-user'>
                                <input minLength={2} maxLength={50} required type='text' name='last_name' placeholder='Enter Last Name' onChange={handleChange} />
                            </div>
                            <div className='main-container-input-user'>
                                <input minLength={2} maxLength={50} required type='text' name='email' placeholder='Enter email' onChange={handleChange} />
                            </div>
                            <div className='main-container-input-user'>
                                <input minLength={2} maxLength={50} required type='text' name='username' placeholder='Enter username' onChange={handleChange} />
                            </div>
                            <div className='main-container-input-user'>
                                <button>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}


export default UserInfo
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/userinfo.css'



function UserInfo() {

    const [userInfo, setUserInfo] = useState([])
    let { userid } = useParams()

    const [user, setUser] = useState({})
    const userId = localStorage.getItem('userid')
    const username = localStorage.getItem('username')
    const [show, setShow] = useState(true);

    const handleShow = () => {
        if (username === 'Guest') {
            setShow(false)
        } 
    }
       

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
    
    useEffect(() => {
        handleShow()
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
                    // console.log(result)
                })
                fetchUser()
        }
        fetchUser()
    }


    return (
        <>
        <div className='background-user'>
            <div className='main-lb-body-info'>
                <div className='leadheader-info'>
                    <h1>View User Details Below</h1>
                </div>
                
                <div className='rendered-body-info'>
                    <div className='rendered-text-info-1'><u>First Name</u>: {userInfo.first_name}</div>
                    <div className='rendered-text-info-2'><u>Last Name</u>: {userInfo.last_name}</div>
                    <div className='rendered-text-info-3'><u>Email</u>: {userInfo.email}</div>
                    <div className='rendered-text-info-4'><u>Username</u>: {userInfo.username}</div>
                </div>
            </div>

                <div className='main-lb-body-update' key={user.userid}>
                    <div className='leadheader-info'>
                        <h1>Edit Details Below</h1>
                    </div>
                    <div className='rendered-body-info'>
                    <form onSubmit={handleEdit}>
                        <div className='form-center'>
                            <div className='rendered-text-info-1'>
                                <input minLength={2} maxLength={50} required type='text' name='first_name' placeholder='Enter First Name' onChange={handleChange} />
                            </div>
                            <div className='rendered-text-info-2'>
                                <input minLength={2} maxLength={50} required type='text' name='last_name' placeholder='Enter Last Name' onChange={handleChange} />
                            </div>
                            <div className='rendered-text-info-3'>
                                <input minLength={2} maxLength={50} required type='text' name='email' placeholder='Enter email' onChange={handleChange} />
                            </div>
                            <div className='rendered-text-info-4'>
                                <input minLength={2} maxLength={50} required type='text' name='username' placeholder='Enter username' onChange={handleChange} />
                            </div>
                            <div className='rendered-text-info-button'>
                                {show ? <button>Save</button>: null}
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
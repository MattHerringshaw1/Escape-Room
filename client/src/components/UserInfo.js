import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/userinfo.css'
import MyScores from './MyScores'



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
            const username = user.username
            localStorage.setItem('username', username)
            fetch('http://localhost:8080/api/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    username: username,
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

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function refresh() {
        window.location.reload(false)
    }

    return (
        <div className='background-user'>
            <div className='main-lb-body-info'>
                <div className='leadheader-info'>
                    Account Details
                </div>
                <div className='acc-details'>
                    <div className='rendered-body-info'>
                        <div className='rendered-text-info-1'><u>First Name</u>: {userInfo.first_name}</div>
                        <div className='rendered-text-info-2'><u>Last Name</u>: {userInfo.last_name}</div>
                        <div className='rendered-text-info-3'><u>Email</u>: {userInfo.email}</div>
                        <div className='rendered-text-info-4'><u>Username</u>: {userInfo.username}</div>
                    </div>
                    <div className='body-update'>
                        <div className='main-lb-body-update' key={user.userid}>
                            <div className='rendered-body-info2'>
                                <div className='leadheader-info2'>
                                    Edit Details Below
                                </div>
                                <form className='form-center' onSubmit={handleEdit}>

                                    <div className='rendered-text-info-12'>
                                        <input minLength={2} maxLength={50} required type='text' name='first_name' placeholder={userInfo.first_name} onChange={handleChange} />
                                    </div>
                                    <div className='rendered-text-info-22'>
                                        <input minLength={2} maxLength={50} required type='text' name='last_name' placeholder={userInfo.last_name} onChange={handleChange} />
                                    </div>
                                    <div className='rendered-text-info-32'>
                                        <input minLength={2} maxLength={50} required type='text' name='email' placeholder={userInfo.email} onChange={handleChange} />
                                    </div>
                                    <div className='rendered-text-info-42'>
                                        <input minLength={2} maxLength={50} required type='text' name='username' placeholder={userInfo.username} onChange={handleChange} />
                                    </div>
                                    <div className='rendered-text-info-button2'>
                                        {show ? <button className='more-button3'>Save <span></span><span></span><span></span><span></span></button> : null}
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div></div>
                <br></br>
                <div><div className="more-button" onClick={togglePopup}>View High Scores <span></span><span></span><span></span><span></span></div></div>
            </div>
            <div>{isOpen && <MyScores />}</div>

        </div>
    )
}


export default UserInfo
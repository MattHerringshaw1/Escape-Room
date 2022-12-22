import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


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

    const handleEdit = () => {


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



    return (
        <div>
            <h1>View Restaurant Details Below</h1>

            <ul>
                <li><u>First Name</u>: {userInfo.first_name}</li>
                <li><u>Last Name</u>: {userInfo.last_name}</li>
                <li><u>Email</u>: {userInfo.email}</li>
                <li><u>Username</u>: {userInfo.username}</li>
            </ul>

            <div key={user.userid}>
                <input type='text' name='first_name' placeholder='Enter First Name' onChange={handleChange} />
                <input type='text' name='last_name' placeholder='Enter Last Name' onChange={handleChange} />
                <input type='text' name='email' placeholder='Enter email' onChange={handleChange} />
                <input type='text' name='username' placeholder='Enter username' onChange={handleChange} />
                <button onClick={handleEdit}>Save</button>

            </div>


        </div>
    )
}


export default UserInfo
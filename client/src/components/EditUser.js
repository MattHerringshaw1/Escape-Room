import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import DisplayUser from './DisplayUser'

function EditUser(props) {

    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const userid = localStorage.getItem('userid')
    // let { userid } = useParams()



    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }



    const handleEdit = () => {
        console.log(user)

        if (!user.first_name || !user.last_name || !user.email || !user.username) {
            alert('Please fill out all textboxes.')
        } else {
            fetch('http://localhost:8080/api/users/:id', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    username: user.username,
                    userid: userid
                })
            }).then(response => response.json())
                .then(result => {
                    if (result.error) {
                        console.log(result.error)
                        return
                    } else {
                    navigate('/edit-user/:id')
                    }
                })
        }
    }





    return (
        <>

            <h1>user info</h1>

            <DisplayUser />

            <div key={user.userid}>
                <input type='text' name='first_name' placeholder='Enter First Name' onChange={handleChange} />
                <input type='text' name='last_name' placeholder='Enter Last Name' onChange={handleChange} />
                <input type='text' name='email' placeholder='Enter email' onChange={handleChange} />
                <input type='text' name='username' placeholder='Enter username' onChange={handleChange} />
                <button onClick={handleEdit}>Save</button>

            </div>

        </>
    )
}


export default EditUser
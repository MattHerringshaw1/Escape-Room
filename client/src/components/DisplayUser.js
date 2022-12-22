import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function DisplayUser() {

    const navigate = useNavigate()
    const [user, setUser] = useState([])
    let { userid } = useParams()


    // const [restaurant, setRestaurant] = useState([])
    // let {restaurantName} = useParams()
    // console.log(restaurantName)

    const fetchUser = () => {
        // const token = localStorage.getItem('jwt')
        // const userid = localStorage.getItem('userid')
        // console.log(userid)
        fetch(`http://localhost:8080/api/view-info/${userid}`, {
        method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`,
                
            }
            // body: JSON.stringify({
            //     userid: user.userid
            })
        
        
        .then(response => response.json())
        .then(result => {
            if(result.error) {
                // console.log(result.error)
            } else {
            setUser(result)
            }
        })
        // console.log(result)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    console.log(user.first_name)
    // const filteredRestaurant = restaurant.filter(foodPlace => {
    //     return foodPlace.restaurant_name === restaurantName })
    //     // console.log(filteredRestaurant)
    // console.log(typeof(user))
    // const filteredUser = user.filter(userInfo => {
    //     return userInfo.userid === userid })

    // const userItem = user.map(user => {
    //     return <div key={user.userid}>
    //         <li><u>First Name</u>: {user.first_name}</li>
    //         <li><u>Last Name</u>: {user.last_name}</li>
    //         <li><u>Email</u>: {user.email}</li>
    //         <li><u>Username</u>: {user.username}</li>
    //     </div>
    // })

    return (
        <div>
            <h1>View Restaurant Details Below</h1>

        <ul>
            <li><u>First Name</u>: {user.first_name}</li>
            <li><u>Last Name</u>: {user.last_name}</li>
            <li><u>Email</u>: {user.email}</li>
            <li><u>Username</u>: {user.username}</li>
        </ul>
            
                {/* <ul>{userItem}</ul> */}
            
        </div>
    )
}

export default DisplayUser
import { NavLink } from "react-router-dom"

function Home() {
    
    const username = localStorage.getItem('username')
    
    return (
        <div>
            <h1>You are home</h1>
            <NavLink to={`/room/${username}`}>GO TO ROOM</NavLink>
            </div>
    )
}

export default Home
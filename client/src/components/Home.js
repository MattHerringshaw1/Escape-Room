import { NavLink } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>You are home</h1>
            <NavLink to='/room'>GO TO ROOM</NavLink>
            </div>
    )
}

export default Home
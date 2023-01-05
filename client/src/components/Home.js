import { NavLink } from "react-router-dom"
import '../styles/home.css'

function Home() {
    
    const username = localStorage.getItem('username')
    
    return (
        <div className="background-home">
            <div className="main-lb-body-home">
                <div className="leadheader-home">
                    <h1>You are home</h1>
                </div>



                <div className="rendered-body-home">
                    <div className="rendered-body-center">
                    <div className="room1-img">
                            <NavLink to={`/room/${username}`}>
                                <div className="img-resize">
                                    <img src="https://img.freepik.com/premium-vector/four-pieces-puzzle-together-vector-icon_572070-203.jpg?w=2000" />
                                </div>
                            </NavLink>
                        </div>
                        <div className="rendered-text-room1-button">
                            <NavLink to={`/room/${username}`}>GO TO ROOM</NavLink>
                        </div>
                        
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Home
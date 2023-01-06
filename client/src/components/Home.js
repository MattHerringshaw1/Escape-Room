import { NavLink } from "react-router-dom"
import '../styles/home.css'
import mainRoom from '../images/EscapeRoomMain.png'

function Home() {
    
    const username = localStorage.getItem('username')
    

    return (
        <div className="background-home">
            <div className="main-lb-body-home">
                <div className="leadheader-home">
                    <h1>Rooms</h1>
                </div>

                <div className="rendered-body-home">
                    <div className="rendered-body-center">
                    <div className="room1-img">
                            <NavLink to={`/room/${username}`}>
                                <div className="img-resize">
                                    <img src={mainRoom} />
                                </div>
                            </NavLink>
                        </div>
                        <div className="rendered-text-room1-button">
                            <NavLink to={`/room/${username}`}>ROOM 1</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
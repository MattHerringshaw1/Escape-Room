import { NavLink } from "react-router-dom"
import '../styles/home.css'
import mainRoom from '../images/EscapeRoomMain.png'

function Home() {

    const username = localStorage.getItem('username')


    return (
        <div className="background-home">
            <div className="main-lb-body-home">
                <div className="leadheader-home">
                    Pick a room
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
                            <NavLink className='buttonlink' to={`/room/${username}`}>
                                <div className="button">Room #1 <span></span><span></span><span></span><span></span></div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
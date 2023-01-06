import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/menu.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import puzzleimage from '../images/logo_thumbnail.png'



function Menu(props) {

    const username = localStorage.getItem('username')
    const userid = localStorage.getItem('userid')


    return (
        <div className="header">
            <Navbar bg="black" variant="dark">
                <Container>
                    <Navbar.Brand className="home" href={`/home/${username}`}>
                        <img
                            src={puzzleimage}
                            width="60"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Puzzle"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link href={`/home/${username}`}>- Home -</Nav.Link>
                        <NavDropdown title="Leaderboard" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/leaderboard">Room 1</NavDropdown.Item>
                            <NavDropdown.Item href="#">Room 2 (WIP)</NavDropdown.Item>
                            <NavDropdown.Item href="#">Room 3 (WIP)</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href='/about-us'>- About Us -</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        {props.isAuth ? <Nav.Link href="/logout">Logout</Nav.Link> : null}
                        {props.isAuth ? null : <Nav.Link href="/login">- Login -</Nav.Link>}
                        {props.isAuth ? null : <Nav.Link href="/register">- Register -</Nav.Link>}
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {props.isAuth ?
                            <Navbar.Text>
                                Signed in as: <a href={`/edit-user/${userid}`}>{username}</a>
                            </Navbar.Text> : null}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(Menu)
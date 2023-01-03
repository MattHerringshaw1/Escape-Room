import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


function Menu(props) {

    const username = localStorage.getItem('username')
    const userid = localStorage.getItem('userid')

    return(
        <>
            {props.isAuth ? null: <NavLink to='/register'>Register</NavLink>}
            {props.isAuth ? null: <NavLink to='/login'>Login</NavLink>}
            {props.isAuth ? <NavLink to='logout'>Logout</NavLink>: null}

            <NavLink to={`/edit-user/${userid}`}>User Info</NavLink>

            <NavLink to={`/home/${username}`}>Home</NavLink>
            <NavLink to={'/leaderboard'}>Leaderboard</NavLink>



        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(Menu)
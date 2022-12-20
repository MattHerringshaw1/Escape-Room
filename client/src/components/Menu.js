import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


function Menu(props) {
    
    const username = localStorage.getItem('username')
    
    return(
        <>
            {props.isAuth ? null: <NavLink to='/register'>Register</NavLink>}
            {props.isAuth ? null: <NavLink to='/login'>Login</NavLink>}
            {props.isAuth ? <NavLink to='logout'>Logout</NavLink>: null}
            <NavLink to={`/home/${username}`}>Home</NavLink>


        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(Menu)
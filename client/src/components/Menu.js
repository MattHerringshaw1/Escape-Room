import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


function Menu(props) {
    return(
        <>
            {props.isAuth ? null: <NavLink to='/register'>Register</NavLink>}
            {props.isAuth ? null: <NavLink to='/login'>Login</NavLink>}
            <NavLink to='/home'>Home</NavLink>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(Menu)
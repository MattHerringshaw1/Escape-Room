import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/menu.css'


function Menu(props) {

    const username = localStorage.getItem('username')
    const userid = localStorage.getItem('userid')

    return(
        <>

            
                <div className='nonAuth-main'>
                    <div className='register'>
                        {props.isAuth ? null: <NavLink to='/register'>Register</NavLink>}
                    </div>                
                    <div className='login'>
                        {props.isAuth ? null: <NavLink to='/login'>Login</NavLink>}
                    </div>
                </div>
                <div className='auth-main'>
                    <div className='auth-link'>
                        {props.isAuth ? <NavLink to={`/home/${username}`}>Home</NavLink>: null}
                    </div>
                    <div className='auth-link'>
                        {props.isAuth ? <NavLink to={`/edit-user/${userid}`}>User Info</NavLink>: null}
                    </div>
                    <div className='auth-link'>
                        {props.isAuth ? <NavLink to={'/leaderboard'}>Leaderboard</NavLink>: null}
                    </div>
                    <div className='logout'>
                        {props.isAuth ? <NavLink to='logout'>Logout</NavLink>: null}
                    </div>
                </div>
            

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(Menu)
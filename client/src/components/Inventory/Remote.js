import { connect } from 'react-redux'
import remote from './inv-images/remote.png'

function Scissors() {

    const username = localStorage.getItem('username')

    return (
        <>
        <img
                src={remote}
                width="60"
                height="150"
                className="d-inline-block align-top"
                alt="Remote Control"
            />
           
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScissors: () => dispatch({type: 'DELETE_SCISSORS'})
    }
}

export default connect(null, mapDispatchToProps)(Scissors)
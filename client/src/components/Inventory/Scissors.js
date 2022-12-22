import { connect } from 'react-redux'

function Scissors() {

    const username = localStorage.getItem('username')

    return (
        <>
        <h4>{username}'s Scissors</h4>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScissors: () => dispatch({type: 'DELETE_SCISSORS'})
    }
}

export default connect(null, mapDispatchToProps)(Scissors)
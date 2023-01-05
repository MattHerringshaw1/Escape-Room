import { connect } from 'react-redux'

function Scissors() {

    const username = localStorage.getItem('username')

    return (
        <>
        <b>Universal Remote</b>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScissors: () => dispatch({type: 'DELETE_SCISSORS'})
    }
}

export default connect(null, mapDispatchToProps)(Scissors)
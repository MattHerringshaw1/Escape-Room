import { connect } from 'react-redux'

function Lighter() {

    const username = localStorage.getItem('username')

    return (
        <>
        <h4>{username}'s Lighter</h4>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLighter: () => dispatch({type: 'DELETE_LIGHTER'})
    }
}

export default connect(null, mapDispatchToProps)(Lighter)
import { connect } from 'react-redux'

function Wrench() {

    const username = localStorage.getItem('username')

    return (
        <>
        <h4>{username}'s Wrench</h4>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWrench: () => dispatch({type: 'DELETE_WRENCH'})
    }
}

export default connect(null, mapDispatchToProps)(Wrench)
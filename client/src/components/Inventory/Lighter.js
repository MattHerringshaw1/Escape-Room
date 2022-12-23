import { connect } from 'react-redux'

function Lighter() {

    const username = localStorage.getItem('username')

    return (
        <>
        <b>Baffling Lighter</b>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLighter: () => dispatch({type: 'DELETE_LIGHTER'})
    }
}

export default connect(null, mapDispatchToProps)(Lighter)
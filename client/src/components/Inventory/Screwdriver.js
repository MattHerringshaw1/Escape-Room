import { connect } from 'react-redux'

function Screwdriver() {

    const username = localStorage.getItem('username')

    return (
        <>
        <b>Phillips Head Screwdriver</b>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScrewdriver: () => dispatch({type: 'DELETE_SCREWDRIVER'})
    }
}

export default connect(null, mapDispatchToProps)(Screwdriver)
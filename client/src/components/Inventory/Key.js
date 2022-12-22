import { connect } from 'react-redux'

function Key() {

    const username = localStorage.getItem('username')

    return (
        <>
        <b>Mysterious Key</b>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setKey: () => dispatch({type: 'DELETE_KEY'})
    }
}

export default connect(null, mapDispatchToProps)(Key)
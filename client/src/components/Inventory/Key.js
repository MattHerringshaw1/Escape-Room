import { connect } from 'react-redux'

function Key() {

    const username = localStorage.getItem('username')

    return (
        <>
        <h4>{username}'s Key</h4>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setKey: () => dispatch({type: 'DELETE_KEY'})
    }
}

export default connect(null, mapDispatchToProps)(Key)
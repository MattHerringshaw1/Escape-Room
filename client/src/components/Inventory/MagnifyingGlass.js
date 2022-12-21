import { connect } from 'react-redux'

function MagnifyingGlass() {

    const username = localStorage.getItem('username')

    return (
        <>
        <h4>{username}'s MagnifyingGlass</h4>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMagnifyingGlass: () => dispatch({type: 'DELETE_MAGNIFYINGGLASS'})
    }
}

export default connect(null, mapDispatchToProps)(MagnifyingGlass)
import { connect } from 'react-redux'

function MagnifyingGlass() {

    const username = localStorage.getItem('username')

    return (
        <>
        <b>Inexplicable Magnifying Glass</b>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMagnifyingGlass: () => dispatch({type: 'DELETE_MAGNIFYINGGLASS'})
    }
}

export default connect(null, mapDispatchToProps)(MagnifyingGlass)
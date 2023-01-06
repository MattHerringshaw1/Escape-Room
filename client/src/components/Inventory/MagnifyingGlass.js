import { connect } from 'react-redux'
import magglass from './inv-images/magglass.png'

function MagnifyingGlass() {

    const username = localStorage.getItem('username')

    return (
        <>
        <img
                src={magglass}
                width="120"
                height="100"
                className="d-inline-block align-top"
                alt="Magnifying Glass"
            />
            
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMagnifyingGlass: () => dispatch({type: 'DELETE_MAGNIFYINGGLASS'})
    }
}

export default connect(null, mapDispatchToProps)(MagnifyingGlass)
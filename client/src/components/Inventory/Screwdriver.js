import { connect } from 'react-redux'
import screwdriver from './inv-images/screwdriver.png'

function Screwdriver() {

    const username = localStorage.getItem('username')

    return (
        <>
        <img
                src={screwdriver}
                width="120"
                height="100"
                className="d-inline-block align-top"
                alt="Screwdriver"
            />
            
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScrewdriver: () => dispatch({type: 'DELETE_SCREWDRIVER'})
    }
}

export default connect(null, mapDispatchToProps)(Screwdriver)
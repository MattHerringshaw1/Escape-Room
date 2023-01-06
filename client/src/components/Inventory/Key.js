import { connect } from 'react-redux'
import key from './inv-images/inv-key.png'

function Key() {

    const username = localStorage.getItem('username')

    return (
        <>
            <img
                src={key}
                width="100"
                height="80"
                className="d-inline-block align-top"
                alt="Mysterious Key"
            />
            
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setKey: () => dispatch({ type: 'DELETE_KEY' })
    }
}

export default connect(null, mapDispatchToProps)(Key)
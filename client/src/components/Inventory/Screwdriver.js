import React, { useState } from 'react'
import { connect } from 'react-redux'

function Screwdriver(props) {

    const userId = localStorage.getItem('userid')
    const username = localStorage.getItem('username')

    return (
        <>
        <h4>{username}'s Screwdriver</h4>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScrewdriver: () => dispatch({type: 'DELETE_SCREWDRIVER'})
    }
}

export default connect(null, mapDispatchToProps)(Screwdriver)
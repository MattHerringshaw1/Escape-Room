import React, { useState } from 'react'
import Screwdriver from '../Inventory/Screwdriver'
import Room from '../Room'
import { connect } from 'react-redux'

function Inventory(props) {

    const userId = localStorage.getItem('userid')
    const username = localStorage.getItem('username')

 

    // const addScrewdriver = () => {
    //     setScrewdriver(!hasScrewdriver);
    // }

    return (
        <>
            <h1>INVENTORY POP-UP FOR {username}</h1>
            <div className='inv-screwdriver' onClick={props.setScrewdriver}>{props.hasScrewdriver && <Screwdriver/>}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        hasScrewdriver: state.hasScrewdriver
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScrewdriver: () => dispatch({type: 'DELETE_SCREWDRIVER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
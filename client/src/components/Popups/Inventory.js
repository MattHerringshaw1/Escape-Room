import React, { useState } from 'react'
import Screwdriver from '../Inventory/Screwdriver'
import { connect } from 'react-redux'
import Wrench from '../Inventory/Scissors'
import Key from '../Inventory/Key'
import MagnifyingGlass from '../Inventory/MagnifyingGlass'
import Lighter from '../Inventory/Lighter'

function Inventory(props) {

    const username = localStorage.getItem('username')

    return (
        <>
            <h1>{username}'s Inventory</h1>
            <div className='inv-screwdriver' onClick={props.setScrewdriver}>{props.hasScrewdriver && <Screwdriver/>}</div>
            <div className='inv-wrench' onClick={props.setWrench}>{props.hasWrench && <Wrench/>}</div>
            <div className='inv-key' onClick={props.setKey}>{props.hasKey && <Key/>}</div>
            <div className='inv-magnifyingglass' onClick={props.setMagnifyingGlass}>{props.hasMagnifyingGlass && <MagnifyingGlass/>}</div>
            <div className='inv-lighter' onClick={props.setLighter}>{props.hasLighter && <Lighter/>}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        hasScrewdriver: state.hasScrewdriver,
        hasWrench: state.hasWrench,
        hasKey: state.hasKey,
        hasMagnifyingGlass: state.hasMagnifyingGlass,
        hasLighter: state.hasLighter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScrewdriver: () => dispatch({type: 'DELETE_SCREWDRIVER'}),
        setWrench: () => dispatch({type: 'DELETE_WRENCH'}),
        setKey: () => dispatch({type: 'DELETE_KEY'}),
        setMagnifyingGlass: () => dispatch({type: 'DELETE_MAGNIFYINGGLASS'}),
        setLighter: () => dispatch({type: 'DELETE_LIGHTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
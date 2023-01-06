import React, { useState } from 'react'
import Screwdriver from '../Inventory/Screwdriver'
import { connect } from 'react-redux'
import Scissors from '../Inventory/Remote'
import Key from '../Inventory/Key'
import MagnifyingGlass from '../Inventory/MagnifyingGlass'
import Lighter from '../Inventory/Lighter'
import './inventory.css'

function Inventory(props) {

    const username = localStorage.getItem('username')

    return (
        <div className='inv-box'>
            <div className='title'>Inventory</div>
            <div className='inv-items'>
                <div className='inv-screwdriver' onClick={props.setScrewdriver}>{props.hasScrewdriver && <Screwdriver />}</div>
                <div className='inv-scissors' onClick={props.setScissors}>{props.hasScissors && <Scissors />}</div>
                <div className='inv-key' onClick={props.setKey}>{props.hasKey && <Key />}</div>
                <div className='inv-magnifyingglass' onClick={props.setMagnifyingGlass}>{props.hasMagnifyingGlass && <MagnifyingGlass />}</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        hasScrewdriver: state.hasScrewdriver,
        hasScissors: state.hasScissors,
        hasKey: state.hasKey,
        hasMagnifyingGlass: state.hasMagnifyingGlass,
        hasLighter: state.hasLighter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScrewdriver: () => dispatch({ type: 'DELETE_SCREWDRIVER' }),
        setScissors: () => dispatch({ type: 'DELETE_SCISSORS' }),
        setKey: () => dispatch({ type: 'DELETE_KEY' }),
        setMagnifyingGlass: () => dispatch({ type: 'DELETE_MAGNIFYINGGLASS' }),
        setLighter: () => dispatch({ type: 'DELETE_LIGHTER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
import React, { useState } from 'react'
import Screwdriver from '../Inventory/Screwdriver'
import { connect } from 'react-redux'
import Scissors from '../Inventory/Remote'
import Key from '../Inventory/Key'
import MagnifyingGlass from '../Inventory/MagnifyingGlass'
import Lighter from '../Inventory/Lighter'

function Inventory(props) {

    const username = localStorage.getItem('username')

    return (
        <>
            <h2>Inventory:</h2>
            <div className='inv-screwdriver' onClick={props.setScrewdriver}>Slot 1: {props.hasScrewdriver && <Screwdriver/>}</div>
            <div className='inv-scissors' onClick={props.setScissors}>Slot 2: {props.hasScissors && <Scissors/>}</div>
            <div className='inv-key' onClick={props.setKey}>Slot 3: {props.hasKey && <Key/>}</div>
            <div className='inv-magnifyingglass' onClick={props.setMagnifyingGlass}>Slot 4: {props.hasMagnifyingGlass && <MagnifyingGlass/>}</div>
            <div className='inv-lighter' onClick={props.setLighter}>Slot 5: {props.hasLighter && <Lighter/>}</div>
            
        </>
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
        setScrewdriver: () => dispatch({type: 'DELETE_SCREWDRIVER'}),
        setScissors: () => dispatch({type: 'DELETE_SCISSORS'}),
        setKey: () => dispatch({type: 'DELETE_KEY'}),
        setMagnifyingGlass: () => dispatch({type: 'DELETE_MAGNIFYINGGLASS'}),
        setLighter: () => dispatch({type: 'DELETE_LIGHTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
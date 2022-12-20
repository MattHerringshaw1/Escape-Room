import React, { useState, forwardRef, useImperativeHandle } from 'react'
import Inventory from './Popups/Inventory'
import '../styles/room.css'
import { connect } from 'react-redux'


function Room(props) {
    
    const username = localStorage.getItem('username')

    // Is the pop-up open or not? 
    const [isOpen, setIsOpen] = useState(false);
    
    // function to toggle the pop-up
    const toggleInventory = () => {
        setIsOpen(!isOpen);
    }


    
    return(
        <div className='main'>
        <h1>main room</h1>
        <div className='open-inventory' onClick={toggleInventory}>CLICK TO OPEN INVENTORY</div>
        <div  className='add-screwdriver' onClick={props.setScrewdriver}>{props.hasScrewdriver ? null: <div>CLICK TO ADD SCREWDRIVER TO INVENTORY</div>}</div>
        <div className='inventory-popup'>{isOpen && <Inventory handleClose={toggleInventory}/>}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        hasScrewdriver: state.hasScrewdriver
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScrewdriver: () => dispatch({type: 'SET_SCREWDRIVER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
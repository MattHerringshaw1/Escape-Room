import React, { useState, forwardRef, useImperativeHandle } from 'react'
import Inventory from './Popups/Inventory'
import '../styles/room.css'






function Room() {
    
    const username = localStorage.getItem('username')

    // Is the pop-up open or not? 
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrewdriver, setScrewdriver] = useState(false)
    // function to toggle the pop-up
    const toggleInventory = () => {
        setIsOpen(!isOpen);
    }

    const addScrewdriver = () => {
        setScrewdriver(!hasScrewdriver);
    }
    
    return(
        <div className='main'>
        <h1>main room</h1>
        <div className='open-inventory' onClick={toggleInventory}>CLICK TO OPEN INVENTORY</div>
        <div  className='add-screwdriver' onClick={addScrewdriver}>CLICK TO ADD SCREWDRIVER TO INVENTORY</div>
        <div className='inventory-popup'>{isOpen && <Inventory handleClose={toggleInventory} handleAdd={addScrewdriver}/>}</div>
        </div>
    )
}

export default Room
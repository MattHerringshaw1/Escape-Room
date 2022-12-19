import React, { useState } from 'react'
import Inventory from './Popups/Inventory'
import '../styles/room.css'


function Room() {
    
    const username = localStorage.getItem('username')

    // Is the pop-up open or not? 
    const [isOpen, setIsOpen] = useState(false);
    // function to toggle the pop-up
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    
    return(
        <div className='main'>
        <h1>main room</h1>
        <div className='open-inventory' onClick={togglePopup}>CLICK TO OPEN INVENTORY</div>
        <div className='inventory-popup'>{isOpen && <Inventory handleClose={togglePopup}/>}</div>
        </div>
    )
}

export default Room

import Inventory from './Popups/Inventory'
import { connect } from 'react-redux'
import React, {useState, useEffect} from 'react'
import '../styles/Room.css'


function Room(props) {

    const [doorCode, setDoorCode] = useState(0)
    const [doorOpen, setDoorOpen] = useState(false)

     const username = localStorage.getItem('username')

    // Is the pop-up open or not? 
    const [isOpen, setIsOpen] = useState(false);
    
    // function to toggle the pop-up
    const toggleInventory = () => {
        setIsOpen(!isOpen);
    }
    

    const handleDoorOpen = (doorCode) =>{
        
        if (doorCode==612){
            setDoorOpen(true)
        }else{
            return
        }
    }

    return(
        <>
    
        <div className='door-code'>
            <h3>Enter Door Code</h3>
            <input type='text' onChange={(e)=>setDoorCode(e.target.value)}/>
            <button onClick={()=>handleDoorOpen(doorCode)}>Try Door</button>
        </div>



        {doorOpen &&(
        <div className='door-open'>
            <h3>You Escaped!</h3>
        </div>
        )}

        {!doorOpen &&(
        <div className='door-closed'>
            <h3>You're Trapped</h3>
        </div>
        )}
       

        <div className='main'>
        <h1>main room</h1>
        <div className='open-inventory' onClick={toggleInventory}>CLICK TO OPEN INVENTORY</div>
        <div  className='add-screwdriver' onClick={props.setScrewdriver}>{props.hasScrewdriver ? null: <div>CLICK TO ADD SCREWDRIVER TO INVENTORY</div>}</div>
        <div className='inventory-popup'>{isOpen && <Inventory handleClose={toggleInventory}/>}</div>
        </div>
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
        setScrewdriver: () => dispatch({type: 'SET_SCREWDRIVER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
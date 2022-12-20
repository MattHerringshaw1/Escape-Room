import React, { useState } from 'react'
import Inventory from './Popups/Inventory'
import '../styles/Room.css'
import { connect } from 'react-redux'



function Room(props) {

    const [doorCode, setDoorCode] = useState(0)
    const [doorOpen, setDoorOpen] = useState(false)

    // Is the pop-up open or not? 
    const [isOpen, setIsOpen] = useState(false);

    const[leftFlag, setLeftFlag] = useState('')
    const[centerFlag, setCenterFlag] = useState('')
    const[rightFlag, setRightFlag] = useState('')

    const username = localStorage.getItem('username')

    // function to toggle the pop-up
    const toggleInventory = () => {
        setIsOpen(!isOpen);
    }
    
    const handleChangeBlue = () =>{
        setLeftFlag('blue')
    }

    const handleChangeWhite = () =>{
        setCenterFlag('white')
    }

    const handleChangeRed = () =>{
        setRightFlag('red')
    }


    const handleDoorOpen = (doorCode) =>{
        
        if (doorCode==612){
            setDoorOpen(true)
        }else{
            return
        }
    }

    const handleCheckColors = () =>{
        if(leftFlag=='blue' && centerFlag=='white' && rightFlag=='red'){
            alert('The code is 612')
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


        <div className='flag-container'>
            
            {leftFlag=='' &&(
            <div className='left-flag'>
                <button onClick={handleChangeBlue}>Blue</button>
            </div>
            )}

            {leftFlag=='blue'&&(
            <div className='left-flag-blue'>
            
            </div>   
            )}

            {centerFlag=='' &&(
            <div className='center-flag'>
                <button onClick={handleChangeWhite}>White</button>
            </div>   
            )}

            {centerFlag=='white' &&(
            <div className='center-flag-white'>
            </div>   
            )} 

            {rightFlag=='' &&(
            <div className='right-flag'>
                <button onClick={handleChangeRed}>Red</button>
            </div>
            )}

            {rightFlag=='red' &&(
            <div className='right-flag-red'>
            </div>
            )}
            <div><button onClick={handleCheckColors}>Try Colors</button></div>
            
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
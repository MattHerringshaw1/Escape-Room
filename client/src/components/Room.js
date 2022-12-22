import React, { useState } from 'react'
import Inventory from './Popups/Inventory'
import '../styles/escape.css'
import { connect } from 'react-redux'
import FlagPuzzle from './FlagPuzzle'
import GearPuzzle from './GearPuzzle'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Drawer from './Drawer'
import { ToolBoxSvg } from './ToolBoxSvg.jsx'



library.add(fas)



function Room(props) {



    const [doorCode, setDoorCode] = useState(0)
    const [doorOpen, setDoorOpen] = useState(false)
    const [showFlag, setShowFlag] = useState(false)
    const [showGear, setShowGear] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const username = localStorage.getItem('username')

    // function to toggle the pop-up
    const toggleInventory = () => {
        setIsOpen(!isOpen);
    }


    const handleDoorOpen = (doorCode) => {

        if (doorCode == 612) {
            setDoorOpen(true)
        } else {
            return
        }
    }


    const handleShowFlag = () => {
        if (props.hasScissors) {
            setShowFlag(true)
        } else {
            alert("It's tied tightly with a rope! You need to cut it open somehow...")
        }
    }

    const handleHideFlag = () => {
        setShowFlag(false)
    }

    const handleShowGear = () => {
        if (props.hasKey) {
            setShowGear(true)
        } else {
            alert("Oh no, it's locked!")
        }
    }

    const handleHideGear = () => {
        setShowGear(false)
    }



    return (
        <>

            {doorOpen && (
                <div className='door-open'>
                    <h3>You Escaped!</h3>
                </div>
            )}


            {!doorOpen && (
                <div className='door-closed'>
                    <h3>You're Trapped</h3>
                </div>
            )}


            <div className='door-code'>
                <h3>Enter Door Code</h3>
                <input type='text' onChange={(e) => setDoorCode(e.target.value)} />
                <button onClick={() => handleDoorOpen(doorCode)}>Try Door</button>
            </div>





            {!showGear && (
                <button onClick={handleShowGear}>Show Gear Puzzle</button>
            )}

            {showGear && (
                <>
                    <button onClick={handleHideGear}>Hide Gear Puzzle</button>
                    <GearPuzzle />
                </>
            )}






            {!showFlag && (
                <button onClick={handleShowFlag}>Show Flag Puzzle</button>
            )}


            {showFlag && (
                <>
                    <button onClick={handleHideFlag}>Hide Flag Puzzle</button>
                    <FlagPuzzle />
                </>
            )}

            <div onClick={props.setScrewdriver} className='tool-box-container2'>
                <ToolBoxSvg />
            </div>


            <div className='main'>
                <h1>main room</h1>
                <div className='add-scissors' onClick={props.setScissors}>{props.hasScissors ? null : <div>Scissors</div>}</div>
                <div className='add-key' onClick={props.setKey}>{props.hasKey ? null : <div>Key</div>}</div>
                <div className='add-magnifying-glass' onClick={props.setMagnifyingGlass}>{props.hasMagnifyingGlass ? null : <div>Magnifying Glass</div>}</div>
                <div className='add-lighter' onClick={props.setLighter}>{props.hasLighter ? null : <div>Lighter</div>}</div>
                <div className='open-inventory' onClick={toggleInventory}>Open Inventory</div>
                <div className='inventory-popup'>{isOpen && <Inventory handleClose={toggleInventory} />}</div>
                <div>{<Drawer />}</div>
            </div>
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
        setScrewdriver: () => dispatch({ type: 'SET_SCREWDRIVER' }),
        setScissors: () => dispatch({ type: 'SET_SCISSORS' }),
        setKey: () => dispatch({ type: 'SET_KEY' }),
        setMagnifyingGlass: () => dispatch({ type: 'SET_MAGNIFYINGGLASS' }),
        setLighter: () => dispatch({ type: 'SET_LIGHTER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
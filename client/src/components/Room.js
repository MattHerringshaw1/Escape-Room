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
import CountDownTimer from './Timer'
import Screwdriver from './Inventory/Screwdriver'



library.add(fas)



function Room(props) {



    const [doorCode, setDoorCode] = useState(0)
    const [doorOpen, setDoorOpen] = useState(false)
    const [showFlag, setShowFlag] = useState(false)
    const [showGear, setShowGear] = useState(false)
    const [showInventory, setShowInventory] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const minSecs={minutes:5, seconds:0}
 

    const username = localStorage.getItem('username')

    const handleDoorOpen = (doorCode) => {

        if (doorCode == 612) {
            setDoorOpen(true)
        } else {
            alert("It's locked! Looks like you're trapped. Try to find a way out!")
        }
    }

    const handleShowInventory = () => {
        setShowInventory(true)
    }

    const handleHideInventory = () => {
        setShowInventory(false)
    }

    const handleShowNote = () => {
        if (props.hasLighter) {
            alert("Prime numbers are numbers that are ONLY divisible by 1 and itself. Also, 'bonjour' is a French word.")
        } else {
            alert("It's too dark to read...")
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

    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }

    const handleOpenDrawer = () => {
        if (props.hasScrewdriver) {
            setOpenDrawer(true)
        } else {
            alert("It's locked and there is nowhere to insert a key! What kind of box is this?!")
        }
    }



    return (
        <>
            <div className='main'>
                <h1>{username}'s Room #1</h1>

                <CountDownTimer minSecs={minSecs}/>

                {doorOpen && (
                    <div className='door-open'>
                        <h3>You Escaped!</h3>
                    </div>
                )}

                {!doorOpen && (
                    <div className='door-closed'>
                        <h3>You're Trapped! Try to find a way out..</h3>
                    </div>
                )}

                <div className='door-code'>
                    <h3>Enter Door Code</h3>
                    <input type='text' onChange={(e) => setDoorCode(e.target.value)} />
                    <button onClick={() => handleDoorOpen(doorCode)}>Try Door</button>
                </div>

                {!showInventory && (
                    <button onClick={handleShowInventory}>Show Inventory</button>
                )}

                {showInventory && (
                    <>
                        <button onClick={handleHideInventory}>Hide Inventory</button>
                        <Inventory />
                    </>
                )}

                <h2>Items around the room</h2>
                <div className='add-scissors' onClick={props.setScissors}>{props.hasScissors ? null : <div className='item-hover'>Scissors</div>}</div>
                <div className='add-key' onClick={props.setKey}>{props.hasKey ? null : <div className='item-hover'>Key</div>}</div>
                <div className='add-magnifying-glass' onClick={props.setMagnifyingGlass}>{props.hasMagnifyingGlass ? null : <div className='item-hover'>Magnifying Glass</div>}</div>
                <div className='add-lighter' onClick={props.setLighter}>{props.hasLighter ? null : <div className='item-hover'>Lighter</div>}</div>
                <div onClick={props.setScrewdriver} className='tool-box-container2'><ToolBoxSvg /></div>

                <button onClick={handleShowNote}>Note in the dark corner of the room</button>

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

                {!openDrawer && (
                    <button onClick={handleOpenDrawer}>Open the mysterious drawer</button>
                )}

                {openDrawer && (
                    <>
                    <button onClick={handleCloseDrawer}>Close the mysterious drawer for some reason</button>
                    <Drawer />
                    </>
                )}
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
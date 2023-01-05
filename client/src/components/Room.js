import React, { useState } from 'react'
import Inventory from './Popups/Inventory'
import '../styles/escape.css'
import { connect } from 'react-redux'
import FlagPuzzle from './FlagPuzzle'
import GearPuzzle from './GearPuzzle'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import CountDownTimer from './CountDownTimer'
import test from '../images/EscapeRoomMain.png'
import test2 from '../images/screwdriver.png'
import test3 from '../images/remote.png'
import test4 from '../images/screwtop.png'
import test5 from '../images/magglass.png'
import test6 from '../images/france.jpg'
import BoxPuzzle from './BoxPuzzle'




library.add(fas)



function Room(props) {



    const [doorCode, setDoorCode] = useState(0)
    const [doorOpen, setDoorOpen] = useState(false)
    const [showFlag, setShowFlag] = useState(false)
    const [showGear, setShowGear] = useState(false)
    const [showInventory, setShowInventory] = useState(false)
    const [showCode, setShowCode] = useState(false)
    const [showTool, setShowTool] = useState(false)
    const [showDriver, setShowDriver] = useState(true)
    const [showRemote, setShowRemote] = useState(true)
    const [showBox, setShowBox] = useState(false)
    const [showGlass, setShowGlass] = useState(false)
    const [showSafe, setShowSafe] = useState(false)
    const minSecs = { minutes: 5, seconds: 0 }


    const username = localStorage.getItem('username')

    const handleDoorOpen = (doorCode) => {
        if (doorCode == 612) {
            setDoorOpen(true)
            props.setDoorOpenDis()
        } else {
            alert("It's locked! Looks like you're trapped. Try to find a way out!")
        }
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
            alert("The display on the wall does not respond to your touch")
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


    const handleOpenDrawer = () => {
        if (props.hasScrewdriver) {
            setShowBox(true)
        } else {
            alert("It's locked and there is nowhere to insert a key! What kind of box is this?!")
        }
    }

    const handleSafeDoor = () => {
        if (props.safeOpen) {
            setShowSafe(true)
        } else {
            alert('The safe is locked tight.')
        }
    }

    const handleHideSafe = () => {
        setShowSafe(false)
    }

    const handleShowCode = () => {
        setShowCode(true)
    }
    const handleHideCode = () => {
        setShowCode(false)
    }

    const handleShowTool = () => {
        setShowTool(true)
    }
    const handleHideTool = () => {
        setShowTool(false)
    }

    const handleShowDriver = () => {
        setShowDriver(false)
    }

    const handleShowRemote = () => {
        setShowRemote(false)
    }

    const handleHideBox = () => {
        setShowBox(false)
    }

    const handleScrewTurn = () => {
        setShowGlass(true)
    }

    const handleMagClick = () => {
        setShowGlass(false)
    }

    return (
        <>
            <div className='main'>
                <div className='room-title'><h1>{username}'s Room #1</h1></div>


                <div className='room-content-container'>

                    {showCode && (
                        <div className='code-pop-container'>
                            <p onClick={handleHideCode} className='pop-close'>X</p>
                            <div className='door-code'>
                                <div className='code-input'>
                                    <h3>Enter Door Code</h3>
                                    <input type='text' onChange={(e) => setDoorCode(e.target.value)} />
                                    <button className='code-btn' onClick={() => handleDoorOpen(doorCode)}>Try Door</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {showFlag && (
                        <div className='flag-pop-container'>
                            <p onClick={handleHideFlag} className='pop-close'>X</p>
                            <div className='flag-puzzle-container'>
                                <FlagPuzzle />
                            </div>
                        </div>
                    )}

                    {showGear && (
                        <div className='gear-pop-container'>
                            <p onClick={handleHideGear} className='pop-close'>X</p>
                            <div className='gear-puzzle-container'>
                                <GearPuzzle />
                            </div>
                        </div>
                    )}

                    {showBox && (
                        <div className='box-pop-container'>
                            <p onClick={handleHideBox} className='pop-close'>X</p>
                            <div className='box-puzzle-container'>
                                <BoxPuzzle />
                                <img onClick={handleScrewTurn} className='screwtop' src={test4} />

                                {showGlass && (
                                    <div>
                                        <p>A hidden drawer opens</p>
                                        <div onClick={handleMagClick} className='mag-click'>
                                            <img onClick={props.setMagnifyingGlass} className='magglass' src={test5} />
                                        </div>

                                    </div>
                                )}

                            </div>
                        </div>
                    )}

                    {showSafe && (
                        <div className='safe-pop-container'>
                            <p onClick={handleHideSafe} className='pop-close'>X</p>
                            <div className='france-img-container'>
                                <p className='france-hint'>There is a single picture inside of what looks like France</p>
                                <img className='france-img' src={test6} />
                            </div>
                        </div>
                    )}

                    {showTool && (
                        <div className='tool-pop-container'>
                            <p onClick={handleHideTool} className='pop-close'>X</p>
                            <div className='inside-tool-container'>

                                {showDriver && (
                                    <div onClick={handleShowDriver} className='driver-container'>
                                        <img onClick={props.setScrewdriver} className='screwdriver' src={test2} />
                                    </div>
                                )}

                                {!showDriver && (
                                    <div></div>
                                )}

                                {showRemote && (
                                    <div onClick={handleShowRemote} >
                                        <img onClick={props.setScissors} className='remote' src={test3} />
                                    </div>
                                )}

                                {!showRemote && (
                                    <div></div>
                                )}

                            </div>
                        </div>

                    )}

                    <img className='room-background' src={test} />
                    <div className='timer-container'><CountDownTimer minSecs={minSecs} /></div>

                    <div className='code-pointer-container' onClick={handleShowCode}>
                    </div>

                    <div className='flag-pointer-container' onClick={handleShowFlag}>
                    </div>

                    <div className='key-pointer-container'>
                        <div className='add-key' onClick={props.setKey}>{props.hasKey ? null : <div className='item-hover-key'></div>}</div>
                    </div>

                    <div className='drawer-pointer-container' onClick={handleOpenDrawer}>
                    </div>

                    <div className='note-pointer-container'>
                    </div>

                    <div className='toolbox-pointer-container' onClick={handleShowTool}>
                        <div className='screwdriver-click' ></div>
                    </div>

                    <div className='gear-pointer-container' onClick={handleShowGear}>
                    </div>

                    <div className='safe-pointer-container' onClick={handleSafeDoor}>
                    </div>


                </div>
            </div>

            <div className='inventory-container'>
                <Inventory />
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
        hasLighter: state.hasLighter,
        safeOpen: state.safeOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setScrewdriver: () => dispatch({ type: 'SET_SCREWDRIVER' }),
        setScissors: () => dispatch({ type: 'SET_SCISSORS' }),
        setKey: () => dispatch({ type: 'SET_KEY' }),
        setMagnifyingGlass: () => dispatch({ type: 'SET_MAGNIFYINGGLASS' }),
        setLighter: () => dispatch({ type: 'SET_LIGHTER' }),
        setDoorOpenDis: () => dispatch({ type: 'DOOR_OPEN' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
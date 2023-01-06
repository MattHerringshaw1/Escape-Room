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
    const [showCode, setShowCode] = useState(false)
    const [showTool, setShowTool] = useState(false)
    const [showDriver, setShowDriver] = useState(true)
    const [showRemote, setShowRemote] = useState(true)
    const [showBox, setShowBox] = useState(false)
    const [showGlass, setShowGlass] = useState(false)
    const [showSafe, setShowSafe] = useState(false)
    const [showNote, setShowNote] = useState(false)
    const [openTool, setOpenTool] = useState(false)
    const [doorNoti, setDoorNoti] = useState(false)
    const [toolNoti, setToolNoti] = useState(false)
    const [flagNoti, setFlagNoti] = useState(false)
    const [boxNoti, setBoxNoti] = useState(false)
    const [gearNoti, setGearNoti] = useState(false)
    const [safeNoti, setSafeNoti] = useState(false)
    const [doorSolveNoti, setDoorSolveNoti] = useState(false)
    const [keyNoti, setKeyNoti] = useState(false)
    const [toolSolveNoti, setToolSolveNoti] = useState(false)

    const minSecs={minutes:5, seconds:0}


    const username = localStorage.getItem('username')

    const handleDoorOpen = (doorCode) => {
        if (doorCode == 612) {
            setDoorOpen(true)
            setDoorSolveNoti(true)
            props.setDoorOpenDis()
            setShowCode(false)
        } else {
            setDoorNoti(true)
        }
    }


    const handleShowNote = () => {
        setShowNote(true)
        setOpenTool(true)
    }

    const handleShowFlag = () => {
        if (props.hasScissors) {
            setShowFlag(true)
        } else {
            setFlagNoti(true)
        }
    }

    const handleHideFlag = () => {
        setShowFlag(false)
    }


    const handleShowGear = () => {
        if (props.hasKey) {
            setShowGear(true)
        } else {
            setGearNoti(true)
        }
    }

    const handleHideGear = () => {
        setShowGear(false)
    }


    const handleOpenDrawer = () => {
        if (props.hasScrewdriver) {
            setShowBox(true)
        } else {
            setBoxNoti(true)
        }
    }

    const handleSafeDoor = () => {
        if (props.safeOpen) {
            setShowSafe(true)
        }else{
            setSafeNoti(true)
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

    const handleShowTool = () =>{
        if(openTool){
        setShowTool(true)
        setToolSolveNoti(true)   
        }else{
            setToolNoti(true)
        }

    }
    const handleHideTool = () => {
        setShowTool(false)
        setToolSolveNoti(false)
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
    const handleHideNote = () =>{
        setShowNote(false)
    }
    const handleHideDoorNoti = () =>{
        setDoorNoti(false)
    }
    const handleHideToolNoti = () =>{
        setToolNoti(false)
    }
    const handleHideFlagNoti = () =>{
        setFlagNoti(false)
    }
    const handleHideBoxNoti = () => {
        setBoxNoti(false)
    }
    const handleHideGearNoti = () => {
        setGearNoti(false)
    }
    const handleHideSafeNoti = () => {
        setSafeNoti(false)
    }
    const handleHideDoorSolveNoti = () =>{
        setDoorSolveNoti(false)
    }
    const handleHideKeyNoti = () =>{
        setKeyNoti(false)
    }
    const handleShowKeyNoti = () => {
        setKeyNoti(true)
    }
    const handleHideToolSolveNoti = () =>{
        setToolSolveNoti(false)
    }

    const handleHideMagSolveNoti = () => {
        setShowGlass(false)
    }
     
    return (
        <div className='mainmain'>
            <div className='main'>
                <div className='room-title'><h1>{username} - Room #1</h1></div>


                <div className='room-content-container'>

                    {showCode && (
                        <div className='code-pop-container'>
                            <p onClick={handleHideCode} className='pop-close'>X</p>
                            <div className='door-code'>
                                <div className='code-input'>
                                    <h3 className='noti-text-heading'>Enter Door Code</h3>
                                    <input type='text' onChange={(e) => setDoorCode(e.target.value)} />
                                    <button className='code-btn' onClick={() => handleDoorOpen(doorCode)}>Try Door</button>
                                </div>
                            </div>
                        </div>
                    )}


                {showNote &&(
                    <div className='note-pop-container'>
                        <p onClick={handleHideNote} className='pop-close'>X</p>
                            <div className='note-hint-container'>
                                <div className='heading-container'>
                                    <h1 className='noti-text-head'>The note on the floor reads:</h1>
                                </div>
                                <div className='note-text-container'>
                                    <h5 className='noti-text-body'>"The old caretaker Matt accidentally welded the toolbox shut years ago. Luckily the red button on the bottom of the box opens it."</h5>
                                </div> 
                            </div>
                    </div>
                )}

                {showFlag &&(
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
                                        
                                        <div onClick={handleMagClick} className='mag-click'>
                                            <img onClick={props.setMagnifyingGlass} className='magglass' src={test5} />
                                        </div>
                                        <div className='mag-solve-noti-container'>
                                            <p onClick={handleHideMagSolveNoti} className='pop-close'>X</p>
                                            <p className='noti-text'>Using the screwdriver, a hidden drawer opens revealing a magnifying glass.</p>
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

                {doorNoti &&(
                    <div className='door-noti-container'>
                        <p onClick={handleHideDoorNoti} className='pop-close'>X</p>
                        <h3 className='noti-text'>INCORRECT</h3>
                        <p className='noti-text'>The red light blinks. The door remains locked.</p>
                    </div>
                )}

                {doorSolveNoti &&(
                    <div className='door-noti-container'>
                        <p onClick={handleHideDoorSolveNoti} className='pop-close'>X</p>
                        <h1 className='noti-text'>CORRECT</h1>
                        <p className='noti-text'>The light turns green. The door opens! You escaped!!</p>
                        <h1 className='noti-text'>Congratulations!</h1>
                    </div>
                )}

                {toolNoti &&(
                    <div className='tool-noti-container'>
                        <p onClick={handleHideToolNoti} className='pop-close'>X</p>
                        <p className='noti-text'>The toolbox is welded shut.</p>
                    </div>    
                )}

                {toolSolveNoti &&(
                    <div className='tool-noti-container'>
                        <p onClick={handleHideToolSolveNoti} className='pop-close'>X</p>
                        <p className='noti-text'>You flip the toolbox over and press the red button. The toolbox opens.</p>
                    </div>    
                )}

                {flagNoti &&(
                    <div className='tool-noti-container'>
                        <p onClick={handleHideFlagNoti} className='pop-close'>X</p>
                        <p className='noti-text'>The display on the wall does not respond to touch.</p>
                    </div>    
                )}

                {boxNoti &&(
                    <div className='tool-noti-container'>
                        <p onClick={handleHideBoxNoti} className='pop-close'>X</p>
                        <p className='noti-text'>The drawer is locked tight, but there appears to be a hole in the top for something long and thin.</p>
                    </div>                    
                )}

                {gearNoti &&(
                    <div className='tool-noti-container'>
                        <p onClick={handleHideGearNoti} className='pop-close'>X</p>
                        <p className='noti-text'>There are a series of gears locked behind a glass panel.</p>
                    </div>                        
                )}

                {safeNoti &&(
                    <div className='tool-noti-container'>
                        <p onClick={handleHideSafeNoti} className='pop-close'>X</p>
                        <p className='noti-text'>The safe is locked tight.</p>
                    </div>                      
                )}

                {keyNoti &&(
                    <div className='tool-noti-container'>
                        <p onClick={handleHideKeyNoti} className='pop-close'>X</p>
                        <p className='noti-text'>You pick up the large key.</p>
                    </div>                      
                )}
                


            

                <img className='room-background' src={test}/>
                <div className='timer-container'><CountDownTimer minSecs={minSecs}/></div>


                    <div className='code-pointer-container' onClick={handleShowCode}>
                    </div>

                    <div className='flag-pointer-container' onClick={handleShowFlag}>
                    </div>


                <div className='key-pointer-container' onClick={handleShowKeyNoti}>
                <div className='add-key' onClick={props.setKey}>{props.hasKey ? null : <div className='item-hover-key'></div>}</div>
                </div>


                    <div className='drawer-pointer-container' onClick={handleOpenDrawer}>
                    </div>


                <div className='note-pointer-container' onClick={handleShowNote}>
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
        </div>

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
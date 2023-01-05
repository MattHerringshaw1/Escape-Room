import React, { useState } from 'react'
import '../styles/flag.css'

function FlagPuzzle(){

    const[leftFlag, setLeftFlag] = useState('')
    const[centerFlag, setCenterFlag] = useState('')
    const[rightFlag, setRightFlag] = useState('')
    const[flagNoti, setFlagNoti] = useState(false)

    const handleChangeLeftBlue = () =>{
        setLeftFlag('blue')
    }
    const handleChangeLeftWhite = () =>{
        setLeftFlag('white')
    }
    const handleChangeLeftRed = () =>{
        setLeftFlag('red')
    }
    const handleChangeLeftYellow = () =>{
        setLeftFlag('yellow')
    }

    
    const handleChangeCenterBlue = () =>{
        setCenterFlag('blue')
    }
    const handleChangeCenterWhite = () =>{
        setCenterFlag('white')
    }
    const handleChangeCenterRed = () =>{
        setCenterFlag('red')
    }
    const handleChangeCenterYellow = () =>{
        setCenterFlag('yellow')
    }

    
    const handleChangeRightBlue = () =>{
        setRightFlag('blue')
    }
    const handleChangeRightWhite = () =>{
        setRightFlag('white')
    }
    const handleChangeRightRed = () =>{
        setRightFlag('red')
    }
    const handleChangeRightYellow = () =>{
        setRightFlag('yellow')
    }
    
    const handleHideFlagNoti = ()=>{
        setFlagNoti(false)
    }



    const handleCheckColors = () =>{
        if(leftFlag=='blue' && centerFlag=='white' && rightFlag=='red'){
            setFlagNoti(true)
        }else{
            return
        }
    }

    return(
        <>
         <div className='flag-container'>
            
            {leftFlag=='' &&(
            <div className='left-flag-start'>
                <button onClick={handleChangeLeftBlue}>Blue</button>
                <button onClick={handleChangeLeftWhite}>White</button>
                <button onClick={handleChangeLeftRed}>Red</button>
                <button onClick={handleChangeLeftYellow}>Yellow</button>
            </div>
            )}
            {leftFlag=='blue' &&(
            <div className='left-flag-blue'>
                <button onClick={handleChangeLeftBlue}>Blue</button>
                <button onClick={handleChangeLeftWhite}>White</button>
                <button onClick={handleChangeLeftRed}>Red</button>
                <button onClick={handleChangeLeftYellow}>Yellow</button>
            </div>
            )}
            {leftFlag=='white' &&(
            <div className='left-flag-white'>
                <button onClick={handleChangeLeftBlue}>Blue</button>
                <button onClick={handleChangeLeftWhite}>White</button>
                <button onClick={handleChangeLeftRed}>Red</button>
                <button onClick={handleChangeLeftYellow}>Yellow</button>
            </div>
            )}
            {leftFlag=='red' &&(
            <div className='left-flag-red'>
                <button onClick={handleChangeLeftBlue}>Blue</button>
                <button onClick={handleChangeLeftWhite}>White</button>
                <button onClick={handleChangeLeftRed}>Red</button>
                <button onClick={handleChangeLeftYellow}>Yellow</button>
            </div>
            )}
            {leftFlag=='yellow' &&(
            <div className='left-flag-yellow'>
                <button onClick={handleChangeLeftBlue}>Blue</button>
                <button onClick={handleChangeLeftWhite}>White</button>
                <button onClick={handleChangeLeftRed}>Red</button>
                <button onClick={handleChangeLeftYellow}>Yellow</button>
            </div>
            )}


            {centerFlag=='' &&(
            <div className='center-flag-start'>
                <button onClick={handleChangeCenterBlue}>Blue</button>
                <button onClick={handleChangeCenterWhite}>White</button>
                <button onClick={handleChangeCenterRed}>Red</button>
                <button onClick={handleChangeCenterYellow}>Yellow</button>
            </div>   
            )}
            {centerFlag=='blue' &&(
            <div className='center-flag-blue'>
                <button onClick={handleChangeCenterBlue}>Blue</button>
                <button onClick={handleChangeCenterWhite}>White</button>
                <button onClick={handleChangeCenterRed}>Red</button>
                <button onClick={handleChangeCenterYellow}>Yellow</button>
            </div>   
            )}
            {centerFlag=='white' &&(
            <div className='center-flag-white'>
                <button onClick={handleChangeCenterBlue}>Blue</button>
                <button onClick={handleChangeCenterWhite}>White</button>
                <button onClick={handleChangeCenterRed}>Red</button>
                <button onClick={handleChangeCenterYellow}>Yellow</button>
            </div>   
            )}
            {centerFlag=='red' &&(
            <div className='center-flag-red'>
                <button onClick={handleChangeCenterBlue}>Blue</button>
                <button onClick={handleChangeCenterWhite}>White</button>
                <button onClick={handleChangeCenterRed}>Red</button>
                <button onClick={handleChangeCenterYellow}>Yellow</button>
            </div>   
            )}
            {centerFlag=='yellow' &&(
            <div className='center-flag-yellow'>
                <button onClick={handleChangeCenterBlue}>Blue</button>
                <button onClick={handleChangeCenterWhite}>White</button>
                <button onClick={handleChangeCenterRed}>Red</button>
                <button onClick={handleChangeCenterYellow}>Yellow</button>
            </div>   
            )}



            {rightFlag=='' &&(
            <div className='right-flag-start'>
                <button onClick={handleChangeRightBlue}>Blue</button>
                <button onClick={handleChangeRightWhite}>White</button>
                <button onClick={handleChangeRightRed}>Red</button>
                <button onClick={handleChangeRightYellow}>Yellow</button>
            </div>
            )}
            {rightFlag=='blue' &&(
            <div className='right-flag-blue'>
                <button onClick={handleChangeRightBlue}>Blue</button>
                <button onClick={handleChangeRightWhite}>White</button>
                <button onClick={handleChangeRightRed}>Red</button>
                <button onClick={handleChangeRightYellow}>Yellow</button>
            </div>
            )}
            {rightFlag=='white' &&(
            <div className='right-flag-white'>
                <button onClick={handleChangeRightBlue}>Blue</button>
                <button onClick={handleChangeRightWhite}>White</button>
                <button onClick={handleChangeRightRed}>Red</button>
                <button onClick={handleChangeRightYellow}>Yellow</button>
            </div>
            )}
            {rightFlag=='red' &&(
            <div className='right-flag-red'>
                <button onClick={handleChangeRightBlue}>Blue</button>
                <button onClick={handleChangeRightWhite}>White</button>
                <button onClick={handleChangeRightRed}>Red</button>
                <button onClick={handleChangeRightYellow}>Yellow</button>
            </div>
            )}
            {rightFlag=='yellow' &&(
            <div className='right-flag-yellow'>
                <button onClick={handleChangeRightBlue}>Blue</button>
                <button onClick={handleChangeRightWhite}>White</button>
                <button onClick={handleChangeRightRed}>Red</button>
                <button onClick={handleChangeRightYellow}>Yellow</button>
            </div>
            )}


            <div><button onClick={handleCheckColors}>Try Colors</button></div>
            
        </div>

            {flagNoti &&(
                    <div className='flag-noti-container'>
                        <p onClick={handleHideFlagNoti} className='pop-close'>X</p>
                        <p className='noti-text'>The display flickers to black and then the numbers 6 1 2 appear</p>
                    </div>                      
                )}
        
        </>
    )

}

export default FlagPuzzle
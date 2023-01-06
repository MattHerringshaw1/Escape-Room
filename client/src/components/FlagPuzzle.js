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
                <button className='flag-button-blue' onClick={handleChangeLeftBlue}></button>
                <button className='flag-button-white' onClick={handleChangeLeftWhite}></button>
                <button className='flag-button-red' onClick={handleChangeLeftRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeLeftYellow}></button>
            </div>
            )}
            {leftFlag=='blue' &&(
            <div className='left-flag-blue'>
                <button className='flag-button-blue' onClick={handleChangeLeftBlue}></button>
                <button className='flag-button-white' onClick={handleChangeLeftWhite}></button>
                <button className='flag-button-red' onClick={handleChangeLeftRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeLeftYellow}></button>
            </div>
            )}
            {leftFlag=='white' &&(
            <div className='left-flag-white'>
                <button className='flag-button-blue' onClick={handleChangeLeftBlue}></button>
                <button className='flag-button-white' onClick={handleChangeLeftWhite}></button>
                <button className='flag-button-red' onClick={handleChangeLeftRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeLeftYellow}></button>
            </div>
            )}
            {leftFlag=='red' &&(
            <div className='left-flag-red'>
                <button className='flag-button-blue' onClick={handleChangeLeftBlue}></button>
                <button className='flag-button-white' onClick={handleChangeLeftWhite}></button>
                <button className='flag-button-red' onClick={handleChangeLeftRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeLeftYellow}></button>
            </div>
            )}
            {leftFlag=='yellow' &&(
            <div className='left-flag-yellow'>
                <button className='flag-button-blue' onClick={handleChangeLeftBlue}></button>
                <button className='flag-button-white' onClick={handleChangeLeftWhite}></button>
                <button className='flag-button-red' onClick={handleChangeLeftRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeLeftYellow}></button>
            </div>
            )}

            {centerFlag=='' &&(
            <div className='center-flag-start'>
                <button className='flag-button-blue' onClick={handleChangeCenterBlue}></button>
                <button className='flag-button-white' onClick={handleChangeCenterWhite}></button>
                <button className='flag-button-red' onClick={handleChangeCenterRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeCenterYellow}></button>
            </div>   
            )}
            {centerFlag=='blue' &&(
            <div className='center-flag-blue'>
                <button className='flag-button-blue' onClick={handleChangeCenterBlue}></button>
                <button className='flag-button-white' onClick={handleChangeCenterWhite}></button>
                <button className='flag-button-red' onClick={handleChangeCenterRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeCenterYellow}></button>
            </div>   
            )}
            {centerFlag=='white' &&(
            <div className='center-flag-white'>
                <button className='flag-button-blue' onClick={handleChangeCenterBlue}></button>
                <button className='flag-button-white' onClick={handleChangeCenterWhite}></button>
                <button className='flag-button-red' onClick={handleChangeCenterRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeCenterYellow}></button>
            </div>   
            )}
            {centerFlag=='red' &&(
            <div className='center-flag-red'>
                <button className='flag-button-blue' onClick={handleChangeCenterBlue}></button>
                <button className='flag-button-white' onClick={handleChangeCenterWhite}></button>
                <button className='flag-button-red' onClick={handleChangeCenterRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeCenterYellow}></button>
            </div>   
            )}
            {centerFlag=='yellow' &&(
            <div className='center-flag-yellow'>
                <button className='flag-button-blue' onClick={handleChangeCenterBlue}></button>
                <button className='flag-button-white' onClick={handleChangeCenterWhite}></button>
                <button className='flag-button-red' onClick={handleChangeCenterRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeCenterYellow}></button>
            </div>   
            )}

            {rightFlag=='' &&(
            <div className='right-flag-start'>
                <button className='flag-button-blue' onClick={handleChangeRightBlue}></button>
                <button className='flag-button-white' onClick={handleChangeRightWhite}></button>
                <button className='flag-button-red' onClick={handleChangeRightRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeRightYellow}></button>
            </div>
            )}
            {rightFlag=='blue' &&(
            <div className='right-flag-blue'>
                <button className='flag-button-blue' onClick={handleChangeRightBlue}></button>
                <button className='flag-button-white' onClick={handleChangeRightWhite}></button>
                <button className='flag-button-red' onClick={handleChangeRightRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeRightYellow}></button>
            </div>
            )}
            {rightFlag=='white' &&(
            <div className='right-flag-white'>
                <button className='flag-button-blue' onClick={handleChangeRightBlue}></button>
                <button className='flag-button-white' onClick={handleChangeRightWhite}></button>
                <button className='flag-button-red' onClick={handleChangeRightRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeRightYellow}></button>
            </div>
            )}
            {rightFlag=='red' &&(
            <div className='right-flag-red'>
                <button className='flag-button-blue' onClick={handleChangeRightBlue}></button>
                <button className='flag-button-white' onClick={handleChangeRightWhite}></button>
                <button className='flag-button-red' onClick={handleChangeRightRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeRightYellow}></button>
            </div>
            )}
            {rightFlag=='yellow' &&(
            <div className='right-flag-yellow'>
                <button className='flag-button-blue' onClick={handleChangeRightBlue}></button>
                <button className='flag-button-white' onClick={handleChangeRightWhite}></button>
                <button className='flag-button-red' onClick={handleChangeRightRed}></button>
                <button className='flag-button-yellow' onClick={handleChangeRightYellow}></button>
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
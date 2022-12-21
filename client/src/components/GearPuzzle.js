import React, { useState } from 'react'
import '../styles/gear.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



function GearPuzzle(){

    const [clickedLeft, setClickedLeft] = useState('gear-start-left')
    const [clickedCenter, setClickedCenter] = useState('gear-start-center')
    const [clickedRight, setClickedRight] = useState('gear-start-right')
    const [clickedFarRight, setClickedFarRight] = useState('gear-start-far-right')
    const [codeLeft, setCodeLeft] = useState(0)
    const [codeCenter, setCodeCenter] = useState(0)
    const [codeRight, setCodeRight] =useState(0)
    const [codeFarRight, setCodeFarRight] =useState(0)
    const [safeDoor, setSafeDoor] = useState(false)

    const handleGearSpinLeft = ()=>{
        clickedLeft ? setClickedLeft('') : setClickedLeft('gear-spin-left');
        setCodeLeft(codeLeft + 1);
        if (codeLeft > 5){
            setCodeLeft(0)
        }
    }

    const handleGearSpinCenter = ()=>{
        clickedCenter ? setClickedCenter('') : setClickedCenter('gear-spin-center');
        setCodeCenter(codeCenter + 1);
        if (codeCenter > 5){
            setCodeCenter(0)
        }
    }

    const handleGearSpinRight = ()=>{
        clickedRight ? setClickedRight('') : setClickedRight('gear-spin-right');
        setCodeRight(codeRight + 1);
        if (codeRight > 5){
            setCodeRight(0)
        }
    }

    const handleGearSpinFarRight = () =>{
        clickedFarRight ? setClickedFarRight('') : setClickedFarRight('gear-spin-far-right');
        setCodeFarRight(codeFarRight + 1);
        if (codeFarRight > 5){
            setCodeFarRight(0)
        }
    }
    
    const handleCheckCode =()=>{
        if(codeLeft == 1 && codeCenter == 2 && codeRight == 3 && codeFarRight == 5){
            setSafeDoor(true)
        }
    }


    return(

        <>  
            
            <h3>The gears are all PRIMED and ready to go!</h3>
            <div className='gear-puzzle-container'>
            
                <div className='gear-and-btn-container'>
                    <h3>{codeLeft}</h3>
                    <FontAwesomeIcon className={clickedLeft || 'gear-start-left'} icon={['fas', 'fa-gear']}/>
                    <button onClick={handleGearSpinLeft}>rotate</button>
                </div>
                <div className='gear-and-btn-container'>
                    <h3>{codeCenter}</h3>
                    <FontAwesomeIcon className={clickedCenter || 'gear-start-center'} icon={['fas', 'fa-gear']}/>
                    <button onClick={handleGearSpinCenter}>rotate</button>
                </div>
                <div className='gear-and-btn-container'>
                    <h3>{codeRight}</h3>
                    <FontAwesomeIcon className={clickedRight || 'gear-start-right'} icon={['fas', 'fa-gear']}/>
                    <button onClick={handleGearSpinRight}>rotate</button>
                </div>
                <div className='gear-and-btn-container'>
                    <h3>{codeFarRight}</h3>
                    <FontAwesomeIcon className={clickedFarRight || 'gear-start-far-right'} icon={['fas', 'fa-gear']}/>
                    <button onClick={handleGearSpinFarRight}>rotate</button>
                </div>
                <div>
                <button onClick={handleCheckCode}>Try Code</button>
                </div>

                {safeDoor &&(
                <div className='safe-door-open'>
                    <h3>Bonjour!</h3> 
                </div>   
                )}

                {!safeDoor &&(
                <div className='safe-door-closed'>
                    <h3>Safe Door</h3>
                </div>   
                )}




            </div>

        </>


    )

}

export default GearPuzzle
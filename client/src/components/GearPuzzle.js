import React, { useState } from 'react'
import '../styles/gear.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'



function GearPuzzle(props){

    const [clickedLeft, setClickedLeft] = useState('gear-start-left')
    const [clickedCenter, setClickedCenter] = useState('gear-start-center')
    const [clickedRight, setClickedRight] = useState('gear-start-right')
    const [clickedFarRight, setClickedFarRight] = useState('gear-start-far-right')
    const [codeLeft, setCodeLeft] = useState(0)
    const [codeCenter, setCodeCenter] = useState(0)
    const [codeRight, setCodeRight] =useState(0)
    const [codeFarRight, setCodeFarRight] =useState(0)
    const [safeOpen, setSafeOpen]=useState(false)


    const handleGearSpinLeft = ()=>{
        clickedLeft ? setClickedLeft('') : setClickedLeft('gear-spin-left');
        setCodeLeft(codeLeft + 1);
        if (codeLeft > 6){
            setCodeLeft(0)
        }
    }

    const handleGearSpinCenter = ()=>{
        clickedCenter ? setClickedCenter('') : setClickedCenter('gear-spin-center');
        setCodeCenter(codeCenter + 1);
        if (codeCenter > 6){
            setCodeCenter(0)
        }
    }

    const handleGearSpinRight = ()=>{
        clickedRight ? setClickedRight('') : setClickedRight('gear-spin-right');
        setCodeRight(codeRight + 1);
        if (codeRight > 6){
            setCodeRight(0)
        }
    }

    const handleGearSpinFarRight = () =>{
        clickedFarRight ? setClickedFarRight('') : setClickedFarRight('gear-spin-far-right');
        setCodeFarRight(codeFarRight + 1);
        if (codeFarRight > 6){
            setCodeFarRight(0)
        }
    }
    
    const handleCheckCode =()=>{
        if(codeLeft == 2 && codeCenter == 3 && codeRight == 5 && codeFarRight == 7){
            props.setSafeDoor()
            setSafeOpen(true)
        }else{
            return
        }
    }


    return(

        <>  
            
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


                {safeOpen &&(
                   <div className='safe-open-hint'>
                    <h2>You hear the safe door open</h2>
                </div>  
                )}
               
            </div>
</>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        setSafeDoor: () => dispatch({type: 'OPEN_SAFE'})
    }
}


export default connect(null, mapDispatchToProps)(GearPuzzle)

import React, {useState, useEffect} from 'react'
import '../styles/Room.css'


function Room(props) {

    const [doorCode, setDoorCode] = useState(0)
    const [doorOpen, setDoorOpen] = useState(false)

    
    

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
        </>
    )
}
    
  


export default Room
import React from 'react'
import {connect} from 'react-redux'

const CountDownTimer = (props) => {
    
    const {minutes = 0, seconds = 60} = props.minSecs;
    const [[mins, secs], setTime] = React.useState([minutes, seconds])
    const [door, setDoor] = React.useState(false)

    const handleDoorCheck = () =>{
        
        if (props.doorOpen){
            setDoor(true)
        }else{
            return
        }
    }
    

    const tick = () => {

        if (secs === 0) {
            setTime([mins - 1, 59]);
        }else{
            setTime([mins, secs - 1])
        }
    }


    React.useEffect(()=>{
        handleDoorCheck()
        if((mins===0 && secs===0) || door===true){
            return
        }else{
        const timerId = setInterval(()=>tick(),1000);
        return()=>clearInterval(timerId)}
    })

   

    return(
        <div>
            <p>
                {`${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`}
            </p>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        doorOpen: state.doorOpen
    }
}

export default connect (mapStateToProps)(CountDownTimer)
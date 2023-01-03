import React from 'react'
import {connect} from 'react-redux'

const CountDownTimer = (props) => {
    
    const {minutes = 0, seconds = 60} = props.minSecs;
    const [[mins, secs], setTime] = React.useState([minutes, seconds])
    const [door, setDoor] = React.useState(false)
    const username = localStorage.getItem('username')


    const handleDoorCheck = () =>{
        
        if (props.doorOpen){
            setDoor(true)
            fetch('http://localhost:8080/api/leaderboad', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mins, secs, username)
            })
            .then(response=> response.json())
            .then(result=>{
                console.log(result)
            })
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
            <h2>
                {`${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`}
            </h2>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        doorOpen: state.doorOpen
    }
}

export default connect (mapStateToProps)(CountDownTimer)
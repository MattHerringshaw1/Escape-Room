import React, { useEffect, useState } from 'react'
import '../styles/leaderboard.css'


function MyScores() {


    const [scores, setScores ] = useState([])
    const [listScores, setListScores] = useState(10)
    const username = localStorage.getItem('username')
    
    

    useEffect(() => {
        fetchAll()
    })

    const fetchAll = () => {
        fetch('http://localhost:8080/api/leaderboard', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(scores => {
                setScores(scores)
            })
    }

    const scoreFilter = scores.filter((newScore) => {
        return (newScore.username === username)
    })

    const scoreOrdered = scoreFilter.sort((a, b) => {
        if (a.mins === b.mins){
            return a.secs > b.secs ? -1 : 1
        } else {
            return a.mins > b.mins ? -1: 1
        }
    })

    const scoreList = scoreOrdered.slice(0, listScores).map((oneScore, index) => {
        return <div className='rendered-body' key={index}>
            <div className='rendered-text-1'>{index + 1} </div>
            <div className='rendered-text-2'>{oneScore.mins} minutes</div>
            <div className='rendered-text-5'>{oneScore.secs} seconds</div>
        </div>
    })   

    return (
        <div>
            <div className='main-lb-body'>
                <div className='leadheader'>{username}'s Top 10</div>
                <div className='column-header'>
                    <div className='col-row-1'>#</div>
                    <div className='col-row-2'>Minutes</div>
                    <div className='col-row-5'>Seconds</div>
                </div>

                {scoreList}
              

            </div>
        </div>
    )

}

export default MyScores
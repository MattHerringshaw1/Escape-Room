import React, { useEffect, useState } from 'react'
import '../styles/leaderboard.css'



function Highscores() {

    const [scores, setScores] = useState([])
    const [listScores, setListScores] = useState(5)

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

    const scoreOrdered = scores.sort((a, b) => {
        if (a.mins === b.mins) {
            return a.secs > b.secs ? -1 : 1
        } else {
            return a.mins > b.mins ? -1 : 1
        }
    })

    const scoreList = scoreOrdered.slice(0, listScores).map((oneScore, index) => {
        return <div className='rendered-body' key={index}>
            <div className='rendered-text-1'>{index + 1} </div>
            <div className='rendered-text-2'>{oneScore.username}  </div>
            <div className='rendered-text-3'>{oneScore.mins} minutes</div>
            <div className='rendered-text-4'>{oneScore.secs} seconds</div>
        </div>
    })

    return (
        <div>
            <div className='main-lb-body'>
                <div className='leadheader'>Room #1 World Leaderboard</div>
                <div className='column-header'>
                    <div className='col-row-1'>#</div>
                    <div className='col-row-2'>Username</div>
                    <div className='col-row-3'>Minutes</div>
                    <div className='col-row-4'>Seconds</div>
                </div>
                {scoreList}
                <div className="more-button" onClick={() => setListScores(listScores + 5)}>Load more...
                    <span></span><span></span><span></span><span></span>
                </div>
            </div>
        </div>
    )

}

export default Highscores
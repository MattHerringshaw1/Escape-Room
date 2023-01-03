import React, { useEffect, useState } from 'react'


function Highscores() {

    const [scores, setScores ] = useState([])

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

    const scoreList = scores.map((oneScore, index) => {
        return <div key={index}>
            <li>{oneScore.username} - {oneScore.mins} minutes : {oneScore.secs} seconds</li>
        </div>
    })

    return (
        <>
            <ol><h1>High Scores: </h1>{scoreList}</ol>
        </>
    )

}

export default Highscores
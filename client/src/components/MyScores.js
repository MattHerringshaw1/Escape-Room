import React, { useEffect, useState } from 'react'


function MyScores() {


    const [scores, setScores ] = useState([])
    const [listScores, setListScores] = useState(5)
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
        return <div key={index}>
            <li>{oneScore.username} - {oneScore.mins} minutes : {oneScore.secs} seconds</li>
        </div>
    })   

    return (
        <>
            <ol><h1>My Highest Scores: </h1>{scoreList}</ol>
            <button onClick={() => setListScores(listScores + 5)}>Show more...</button>
            <button onClick={() => setListScores(listScores - 5)}>Show less...</button>
        </>
    )

}

export default MyScores
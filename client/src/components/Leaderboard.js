import React, { useEffect, useState } from 'react'
import Highscores from './Highscores'
import MyScores from './MyScores'
import '../styles/leaderboard.css'

function Leaderboard() {

    return (
        <div>
            <div className='main-lb-body'>
                <Highscores />
            </div>
            <div className='my-lb-body'>
                <MyScores />
            </div>
        </div>
    )

}

export default Leaderboard
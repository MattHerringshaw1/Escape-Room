import React, { useEffect, useState } from 'react'
import Highscores from './Highscores'
import MyScores from './MyScores'
import '../styles/leaderboard.css'

function Leaderboard() {

    const username = localStorage.getItem('username')


    return (
        <div className="background">
            <div className='main-lb-body'>
                <Highscores />
            </div>
            
        </div>
    )

}

export default Leaderboard
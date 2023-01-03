import React, { useEffect, useState } from 'react'
import Highscores from './Highscores'
import MyScores from './MyScores'

function Leaderboard() {

    const username = localStorage.getItem('username')


    return (
        <>
            <Highscores />
            <MyScores />
        </>
    )

}

export default Leaderboard
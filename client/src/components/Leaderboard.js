import React, { useEffect, useState } from 'react'
import Highscores from './Highscores'

function Leaderboard() {

    const username = localStorage.getItem('username')


    return (
        <>
            <Highscores />
        </>
    )

}

export default Leaderboard
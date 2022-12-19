import React, { useState } from 'react'

function Screwdriver(props) {

    const userId = localStorage.getItem('userid')
    const username = localStorage.getItem('username')

    return (
        <>
        <h4>{username}'s Screwdriver</h4>
        </>
    )
}

export default Screwdriver
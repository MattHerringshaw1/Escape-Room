import React, { useState } from 'react'

function Inventory(props) {

    const userId = localStorage.getItem('userid')
    const username = localStorage.getItem('username')

    return (
        <>
        <h1>INVENTORY POP-UP FOR {username}</h1>
        </>
    )
}

export default Inventory
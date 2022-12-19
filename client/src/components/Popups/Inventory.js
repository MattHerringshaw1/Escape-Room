import React, { useState } from 'react'
import Screwdriver from '../Inventory/Screwdriver'
import Room from '../Room'

function Inventory(props) {

    const userId = localStorage.getItem('userid')
    const username = localStorage.getItem('username')

    const [hasScrewdriver, setScrewdriver] = useState(false)

    return (
        <>
        <h1>INVENTORY POP-UP FOR {username}</h1>
        <div>{props.hasScrewdriver && <Screwdriver handleDelete={props.addScrewdriver}/>}</div>
        </>
    )
}

export default Inventory
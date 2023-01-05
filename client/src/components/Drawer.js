import React, { useState } from 'react'
import { connect } from 'react-redux'
import BoxPuzzle from './BoxPuzzle'

function Drawer(props) {

    const handleDrawerOpen = () => {
        if (props.hasScrewdriver == true) {
            props.setDrawer()
        } else {
            return
        }
    }


    return (
        <div>
            <h5 onClick={handleDrawerOpen}>{props.drawerOpen ? <div><BoxPuzzle /></div> : <div style={{cursor:'pointer'}}>There's a strange device in this drawer... click to turn it over. </div>}</h5>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        hasScrewdriver: state.hasScrewdriver,
        drawerOpen: state.drawerOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDrawer: () => dispatch({type: 'OPEN_DRAWER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
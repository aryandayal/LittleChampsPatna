import React from 'react'
import './Frame.css'   

function Frame({source}) {
    return(
        <div id='frame'>
            <img src={source} alt="unavailable"/>
            <p>picture</p>
        </div>
    )
}
export default Frame;
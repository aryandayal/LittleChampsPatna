import React from 'react'
import './notice.css'

function Notice({bgColor, content, title}) {
    return(
        <div id='notice' style={{backgroundColor: bgColor}}>
            <div id='pin'></div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}
export default Notice;
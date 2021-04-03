import React from 'react'
import './Game1.css'

const Game1 = () => {
    return(
        <form action="">
            <div className="wrapper">
            <label for='firstquestion'>firstquestion</label>
            <input type="range" class="slider" id="slider" min="1" max="100"/><br/>
            <span id="demo"></span>
            </div>
        </form>
    )
}
export default Game1;
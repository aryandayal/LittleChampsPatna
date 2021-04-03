import React from 'react'
import './gallery.css'
import Frame from './Frame.jsx'
import g1 from './images/g1.jpg'
import g2 from './images/g2.jpg'
import g3 from './images/g3.jpg'
import g4 from './images/g4.jpg'
import g5 from './images/g5.jpg'
import g6 from './images/g6.jpg'
import g7 from './images/g7.jpg'

function Gallery(){
    return(
        <div className='galary-container'>
        <h2>Gallery</h2>
        <div class='row'>
            <div class='column'>
                <Frame source={g1}></Frame>
                <Frame source={g2}></Frame>
            </div>
            <div class='column'>
                <Frame source={g3}></Frame>
                <Frame source={g4}></Frame>
            </div>
            <div class='column'>
                <Frame source={g5}></Frame>
                <Frame source={g6}></Frame>
            </div>
            <div class='column'>
                <Frame source={g7}></Frame>
                <Frame source={g1}></Frame>
            </div>
        </div>
        </div>
    )
}
export default Gallery;
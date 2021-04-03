import React from 'react'
import Gallery from './components/gallery.jsx'
import Header from './components/header.jsx'
import NoticeBoard from './components/noticeBoard.jsx'
import FunZone from './components/FunZone.jsx'


function App() {
    return(
        <>
        <Header></Header>
        <NoticeBoard></NoticeBoard>
        <Gallery></Gallery>
        <FunZone>
        </FunZone>
        </>
    )
}

export default App;
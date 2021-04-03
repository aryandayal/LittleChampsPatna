import React from 'react'
import './noticeBoard.css'
import Notice from './notice'

function NoticeBoard () {
    return(
        <>
            <h1 style={{marginLeft: "500px"}}>NOTICE BOARD</h1>
        <div id='noticeBoard'>
            <Notice bgColor="yellow" title="Notice1" content="Hello"></Notice>
            <Notice bgColor="Red" title="Notice2" content="I"></Notice>
            <Notice bgColor="brown" title="Notice3" content="Am"></Notice>
            <Notice bgColor="grey" title="Notice4" content="Here"></Notice>
            <Notice bgColor="pink" title="Notice5" content="Hello"></Notice>
            <Notice bgColor="white" title="Notice6" content="I"></Notice>
            <Notice bgColor="lightgreen" title="Notice7" content="Hello"></Notice>
            <Notice bgColor="cyan" title="Notice8" content="Here"></Notice>
        </div>
        </>
    )
}
export default NoticeBoard;
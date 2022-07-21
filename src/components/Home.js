import Toss from './Toss.js'
import Rules from './Rules.js'
import Navbar from './Navbar.js'
import React, { useState } from 'react'


export default function Home() {
    const handleStartClick=()=>{
       setView(2);
    }
    const handleRuleClick=()=>{
        setView(3);
    }
    const [currView, setView] = useState(1);
    if(currView===1){
    return(
        <>
        <Navbar title="The Hand Cricket" about="About Us" dropdown="More projects"></Navbar>
        <div className="text-center align-middle">
            <h1 className='center'>Welcome to e-Hand Cricket!</h1>
            <h3>Experience your childhood memories of hand cricket</h3>
            <div className='mb3'>
            <button className="btn btn-primary mx-2" onClick={handleStartClick}>
                Toss
            </button>
            <button className="btn btn-primary mx-2" onClick={handleRuleClick}>Rules</button>
            </div>
        </div>


        </>
    )
    }
    else if(currView===2){
        return(
            <Toss/>
        )
    }
    else if(currView===3){
        return(
            <Rules/>
        )
    }
    
}
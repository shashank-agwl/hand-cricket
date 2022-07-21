import Toss from './Toss.js'
import Home from './Home.js'
import React, { useState } from 'react'


export default function Rules() {
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
        <div className='container'>
            
            <h1 className='center'>Rules</h1>
            <ul>
                <li>All computer choice are completely randomised.</li>
                <li>You only get one wicket to play.</li>
                <li>Once you start you moves towards toss wherein you choose btw H and T.</li>
                <li>Then you choose any button depicting the number of fingers i.e 1,2,3,4,6.</li>
                <li>If your and computer responses matches it is considered as OUT.</li>
                <li>Once 1st innings is over you are automatically taken towards the second innings.</li>
                <li><b>DO NOT REFRESH THE PAGE</b> as it may cause loss of data and game restart.</li>
                <li>Enjoy Playing!!!</li>
            </ul>
            
            <div className='mb3'>
            <button className="btn btn-primary mx-2" onClick={handleStartClick}>
                Start
            </button>
            <button className="btn btn-primary mx-2" onClick={handleRuleClick}>Back</button>
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
            <Home/>
        )
    }
    
}
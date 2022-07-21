import Win from './Win.js'
import Loss from './Loss.js'
import React, { useState } from 'react'
import head from './head.png'
import tail from './tail.jpg'


export default function Toss() {
    const handleHeadClick=()=>{
        let x = Math.floor(Math.random() * (2)+1);
        if(x!==1){
            setState(2);
        }
        else{
            setState(3);
        }
    }
    const handleTailClick=()=>{
        let x = Math.floor(Math.random() * (2)+1);
        if(x!==2){
            setState(2);
        }
        else{
            setState(3);
        }
    }
    
    const [currView, setState] = useState(1);
    if(currView === 1){
    return(
        <>
        <div className='text-center'>
            <h1 className='center'>Toss</h1>
            <div className = "mb3">
                <h3>Choose Heads or tails?</h3>
            </div>
            <div className='mb3'>
            <button className="btn mx-2" onClick={handleHeadClick}>
                <img src={head} className="img-thumbnail mx-auto d-block" alt="Heads"/>
            </button>
            <button className="btn mx-2" onClick={handleTailClick}>
                <img src={tail} className="img-thumbnail mx-auto d-block" alt="tails" ></img></button>
            </div>
        </div>

        </>
    )
    }
    else if(currView === 2){
        return(
            <Win/>
        )
    }
    else{
        return (
            <Loss/>
        )
    }
}
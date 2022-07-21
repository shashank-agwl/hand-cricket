import React, { useState } from 'react'
import Bat from './Bat.js'
import Bowl from './Bowl.js'
import bat from './bat.jpeg'
import bowl from './bowl.jpg'

export default function Win(){
    
    const handleBatClick=()=>{
        setView(2);
        localStorage.setItem('currView',2);
    }

    const handleBowlClick=()=>{
        setView(3);
        localStorage.setItem('currView',3);
    }
    
    const [currView,setView]=useState(1);
    if(currView===1){
    return(
        <>
        <div className='container'>
            <div className='text-center'>
            <h1>Congrats You Won the toss</h1>
            <h3>Choose to Bat or Bowl?</h3>
            <div className='mb3'>
            <button className="btn mx-2" onClick={handleBatClick} >
                <img src={bat} class="img-thumbnail" alt="Bat"/>
            </button>
            <button className="btn mx-2" onClick={handleBowlClick} >
                <img src={bowl} class="img-thumbnail" alt="Bowl" ></img></button>
            </div>
            </div>
        </div>
        </>
    )
    }
    else if(currView===2){
        return (
            <Bat/>
        )
    }
    else if(currView===3){
        return (
            <Bowl/>
        )
    }
}
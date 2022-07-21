import Bat from './Bat.js'
import Bowl from './Bowl.js'
import React, {useState} from 'react'

export default function Loss(){
    let x=Math.floor(Math.random() * (2)+1);

    const handleBatClick=()=>{
        setView(2);
    }

    const handleBowlClick=()=>{
        setView(3);
    }

    const [currView, setView] = useState(1);

    if(x===1 && currView ===1){
        return(
            <>
            <div className='container'>
            <div className='text-center'>
                <h1>Sorry You Lost the toss</h1>
                <h3>Computer has decided to bowl first.</h3>
                <button className="btn btn-primary mx-2" onClick={handleBatClick}>Play</button>
            </div>
            </div>
            </>
        )            
    }
    else if(x===2 && currView===1){
        return(
            <>
            <div className='container'>
            <div className='text-center'>
                <h1>Sorry You Lost the toss</h1>
                <h3>Computer has decided to bat first.</h3>
                <button className="btn btn-primary mx-2" onClick={handleBowlClick}>Play</button>
            </div>
            </div>
            </>
        )
    }
    else if(currView===2){
        return(
            <Bat/>
        )
    }
    else if(currView===3){
        return(
            <Bowl/>
            //bowl
        )
    }
    
}
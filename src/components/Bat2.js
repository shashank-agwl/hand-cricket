import React, {useState} from 'react'
import End from './End.js'

export default function Bat2() {
    
    const handleOneClick=()=>{
        let x = Math.floor(Math.random() * (5)+1);
        if(x===5){
            x=x+1;
        }
        setcScore(x);
        if(x!=1){
            let newScore = score+1;
            setScore(newScore);
            
        }
        else if(score<target){
            setView(2) 
        }
        else{
             setView(3)
        }
    }

    const handleTwoClick=()=>{
        let x = Math.floor(Math.random() * (5)+1);
        if(x===5){
            x=x+1;
        }
        setcScore(x);
        if(x!=2){
            let newScore = score+2;
            setScore(newScore);
            
        }
        else if(score<target){
            setView(2) 
        }
        else{
             setView(3)
        }
    }

    const handleThreeClick=()=>{
        let x = Math.floor(Math.random() * (5)+1);
        if(x===5){
            x=x+1;
        }
        setcScore(x);
        if(x!=3){
            let newScore = score+3;
            setScore(newScore);
            
        }
        else if(score<target){
            setView(2) 
        }
        else{
             setView(3)
        }
    }

    const handleFourClick=()=>{
        let x = Math.floor(Math.random() * (5)+1);
        if(x===5){
            x=x+1;
        }
        setcScore(x);
        if(x!=4){
            let newScore = score+4;
            setScore(newScore);
            
        }
        else if(score<target){
            setView(2) 
        }
        else{
             setView(3)
        }
    }

    const handleSixClick=()=>{
        let x = Math.floor(Math.random() * (5)+1);
        if(x===5){
            x=x+1;
        }
        setcScore(x);
        if(x!=6){
            let newScore = score+6;
            setScore(newScore);
            
        }
        else {
            if(score<target){
                setView(2)
            }
            else{
                setView(3)
                console.log(view);
            }
        }
        
    }


    const [score, setScore] = useState(0);
    const [cscore, setcScore] = useState(0);
    const [view, setView] = useState(0);
    let target = localStorage.getItem('target');
    
    if(score<target && view==0){
        return(
        <>
        <div className="container">
        <div className='text-center'>
            <h1>You are Batting ---</h1>
            <div className = "mb3">
            {
            //<textarea className = "form-control" id = "myBox" rows="8" value = {score} onChange = {handleOnChange}>
            //</textarea>
        }
            <h2>Target:- {target}</h2>
            <h2>Your Score:- {score}</h2>
            <h2>Computer Choice = {cscore}</h2>
            </div>
            <br/>
            <button className="btn btn-primary mx-2" onClick={handleOneClick}>1</button>
            <button className="btn btn-primary mx-2" onClick={handleTwoClick}>2</button>
            <button className="btn btn-primary mx-2" onClick={handleThreeClick}>3</button>
            <button className="btn btn-primary mx-2" onClick={handleFourClick}>4</button>
            <button className="btn btn-primary mx-2" onClick={handleSixClick}>6</button>
        </div>
        </div>
        </>

        )
    }
    
    else if(view===2){
        return <End heading = "Sorry You Lost by" runs = {target-1-score + " runs"}/> ; 
    }
    else{
        return <End heading = "Congrats You Won"/> ;
    }
}
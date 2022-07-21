import React, {useState} from 'react'
import Bat2 from './Bat2.js'

export default function Bowl() {    
    const handleOneClick=()=>{
        let x = Math.floor(Math.random() * (5)+1);
        if(x===5){
            x=x+1;
        }
        setcScore(x);
        if(x!=1){
            let newScore = score+x;
            setScore(newScore);
            
        }
        else{
            setTarget(score);
            setI(2);
            localStorage.setItem('target',score+1);
            
        }
    }

    const handleTwoClick=()=>{
        let x = Math.floor(Math.random() * (5)+1);
        if(x===5){
            x=x+1;
        }
        setcScore(x);
        if(x!=2){
            let newScore = score+x;
            setScore(newScore);
            
        }
        else{
            setTarget(score);
            setI(2);
            localStorage.setItem('target',score+1);
            
        }
    }

    const handleThreeClick=()=>{
        let x = Math.floor(Math.random() * (5)+1);
        if(x===5){
            x=x+1;
        }
        setcScore(x);
        if(x!=3){
            let newScore = score+x;
            setScore(newScore);
            
        }
        else{
            setTarget(score);
            localStorage.setItem('target',score+1);
            setI(2);
        }
    }

    const handleFourClick=()=>{
        let x = Math.floor(Math.random() * (5)+1);
        if(x===5){
            x=x+1;
        }
        setcScore(x);
        if(x!=4){
            let newScore = score+x;
            setScore(newScore);
            
        }
        else{
            setTarget(score);
            localStorage.setItem('target',score+1);
            setI(2);
        }
    }

    const handleSixClick=()=>{
        let x = Math.floor(Math.random() * (5)+1);
        if(x===5){
            x=x+1;
        }
        setcScore(x);
        if(x!=6){
            let newScore = score+x;
            setScore(newScore);
            
        }
        else{
            setTarget(score);
            localStorage.setItem('target',score+1);
            setI(2);
        }
    }


    const [score, setScore] = useState(0);
    const [cscore, setcScore] = useState(0);
    const [target,setTarget]= useState(0);
    const [i,setI]= useState(0);

    if(i===0){
    return(
    <>
    <div className="container">
    <div className='text-center'>
        <h1>You are Bowling ---</h1>
        <div className = "mb3">
            {
            //<textarea className = "form-control" id = "myBox" rows="8" value = {score} onChange = {handleOnChange}>
            //</textarea>
        }
        <h3>Computer's Score:- {score}</h3>
        <h3>Computer Choice = {cscore}</h3>
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
    else{
        return(<Bat2/>)
    }
}
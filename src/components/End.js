import React, {useState} from 'react'
import Home from './Home.js'


export default function End(props){
    localStorage.clear();
    
    const handleRuleClick=()=>{
        setView(3);
    }
    
    const [currView, setView] = useState(1);
    
    if(currView===1){
    return(
        <>
        <div className='text-center align-middle'>
        <h1>{props.heading} {props.runs}</h1>
        <br>
        </br>
        <button className="btn btn-primary mx-2" onClick={handleRuleClick}>Home</button>
        </div>
        </>
    )
    }
    else{
        return(<Home/>)
    }
}
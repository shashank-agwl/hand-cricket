import React, {useState} from 'react'

export default function TextBox(props) {
    
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleClClick=()=>{
        let newText = '';
        setText(newText)
    }

    const handleDownClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleSpaces=()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');

    return(
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className = "mb3">
            <textarea className = "form-control" id = "myBox" rows="8" value = {text} onChange = {handleOnChange}>
            </textarea>
        </div>
        <br/>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3">
        <h2>Desired output</h2>
        <p>{text}</p>
        <h2>Text Summary</h2>
        <p>No of words = {text.split(" ").length} and No. of Characters = {text.length}</p>
        
    </div>
    </>
)
}
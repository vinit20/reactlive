import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
        // console.log("lowercasecase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        // console.log("on change");
        setText(event.target.value);
    }

    const handleClearClick = () =>{
        // console.log("lowercasecase was clicked" +text);
        let newText = "";
        setText(newText);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');

    // text="newText"   // wrong way to change the state
    // setText("new text"); // correct way

    return (
        <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div className="form-group">
                {/* <label for="myBox">Enter your text below</label> */}
                <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor:props.mode === 'dark'?'#464a47':'white', color: props.mode === "dark"?"white":"black"}} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
            <button className="btn btn-warning mt-3" onClick={handleLowClick}>convert to lowercase</button>
            <button className="btn btn-success mt-3 mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-danger mt-3 mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-info mt-3 mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
        </div>

        <div className="container my-4"  style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p> {0.008 * text.split(" ").length } Minutes read </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

        </>
    )
}


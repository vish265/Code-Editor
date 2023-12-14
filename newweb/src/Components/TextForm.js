import React, {useState} from 'react';




export default function TextForm(props) {
    const handleUpClick = ()=>{
       
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase" , "success");
    }

    const handleloClick = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase" , "success");
    }

    const handleclearClick = ()=>{
        
        let newText = '';
        setText(newText)
    }

    const handleCopy= ()=>{
        
        let text=document.getElementById("myBox");
        text.select();
        props.showAlert("Text Copied Seccuessfully" , "success");
        
        navigator.clipboard.writeText(text.value);
    }

    const firLetterUp = () => {
        let newText = text.split(" ");
        let finalArr = []
        newText.forEach((element) => {
          let afterUp = element[0].toUpperCase();
          afterUp = afterUp.concat(element.substring(1))
          finalArr.push(afterUp);
        })
        setText(finalArr.join(" "));
      }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed Successfully" , "success")
    }  
    

    const handleOnChange= (event)=>{
        console.log("onchange");
        
        setText(event.target.value)
    }
    //state
    const [text, setText] = useState('Enter the text');  
    //to cahnge the state
   // setText=("Enter Text Here");\

   
  return (
    <>
    <div className='container' style={{Color : props.mode===`dark`?`white`:`black`}}>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode===`dark`?`grey`:`white`, Color:props.mode===`dark`?`white`:`black`}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Convert Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" id="div" onClick={handleclearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={firLetterUp}>Convert First Letter Up</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

      
    </div>
    <div className="container my-4" style={{Color : props.mode===`dark`?`white`:`black`}}>
        <h1>Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words , {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}

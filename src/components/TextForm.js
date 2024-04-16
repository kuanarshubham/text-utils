import {useState} from "react";

function TextForm(props){

    const [text, setText]= useState("");

    const handleOnChange = (event)=>{
        setText(event.target.value);
    } 

    const handleUpClick = ()=>{
        setText(text.toUpperCase());
    } 

    const clearText = ()=>{
        setText("");
    }

    const capitalize  = (str1)=>{
        let str =str1.trim();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleCapChange = ()=>{
        let line = text.split(".");
        let newLine= [];
        for(let i =0; i<line.length; i++){
            newLine.push(capitalize(line[i]));
        }
        
        setText(newLine.join(". "));
    }

    

    const count = ()=>{
        let arr = text.split(" ");
        let newText = [];
        let j=0;
        for(let i=0;  i<arr.length; i++){
            if(arr[i]!=""){
                newText.push(arr[i]);
                j++;
            }
        }
        return j;
    }
    
    var wordCount = count();

    return (
    <>
    <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label "><h2>{props.title}</h2></label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange} style= {props.mode === "light" ? {backgroundColor: "white", color: "black"}  : {backgroundColor: "black", color: "white"}}>{text}</textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-4" onClick={handleCapChange}>Capitalize</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
    </div>

    <div className="info">
        <p className="wordCount">Total numebr of words are {wordCount}</p>
    </div>
    </>
    );
}

export default TextForm;
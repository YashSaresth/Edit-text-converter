import React , {useState}from 'react'

export default function Textarea(props) {
  const handleUpChange =()=>{
    console.log("the button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("the upper case is clicked!", "success");
  }
  const handleDownChange =()=>{
    console.log("the button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("the lower case is clicked!", "success");
  }
  const Clear =()=>{
    setText("");
    props.showAlert("the text is cleard!", "success");
  }
  const handleOnChange =(event)=>{
    console.log("onchange was clicked");
    setText(event.target.value);
  }
  const [text,setText] = useState(" ");
  return (
   <>
   <div className='Container' style ={{color : props.mode==='dark'?'white':'#042743'}}>
   <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value ={text} onChange ={handleOnChange} style ={{backgroundColor : props.mode==='dark'?'#13466e':'white',color : props.mode==='dark'?'white':'#042743'}} id="mybox" rows="12"></textarea>
  </div>
  <button className ="btn btn-primary mx-3 my-3"onClick={handleUpChange}>Convert to UpperCase</button>
  <button className ="btn btn-primary mx-3 my-3"onClick={handleDownChange}>Convert to LowerCase</button>
  <button className ="btn btn-primary mx-3 my-3"onClick={Clear}>ClearText</button>
</div>
<div className='Container my-3' style ={{color : props.mode==='dark'?'white':'#042743'}}>
  <h1> Your Text Summary</h1>

  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words and {text.length} charcter</p>
  <h6>{0.008*text.split(" ").filter((element)=>{return element.length!==0 }).length} Minutes Read</h6>
  <p>{text}</p>

</div>
</>
  )
  
}

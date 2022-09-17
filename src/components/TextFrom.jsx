import React, {useState} from 'react'

const TextFrom = ( p ) => {

    const [text, settext] = useState(p.variable)

    const [color, setcolor] = useState({
        tareaBg: "light",
        tareaText: "dark",
        buttoncolor: "primary"
    })


    const convertTolowercase = () =>{

        settext(text.toLowerCase());
        
    }

    const convertToupperCase = () =>{

        settext(text.toUpperCase());

     }

     const trimWhiteSpaces = () =>{
        settext(text.trim())
     }

     const toggleDark = () =>{

        setcolor({
            tareaBg: "dark",
            tareaText: "light",
            buttoncolor: "secondary"
        })
        
     }

     const toggleLight = () =>{
        setcolor({
            tareaBg: "light",
            tareaText: "dark",
            buttoncolor: "primary"
        })
     }



  return (
    <>
    
    <div className="form-floating">

  <textarea className={`form-control bg-${color.tareaBg} text-${color.tareaText}`} placeholder="Leave a comment here" id="floatingTextarea2" style={{height : "100px"}} 
  onChange={(emmet)=>{
    settext(emmet.target.value)
  }} 
  value={text} ></textarea>

  <label htmlFor="floatingTextarea2">Comments</label>

<div style={{marginTop: "10px"}}>
  <button className={`btn btn-${color.buttoncolor}`} onClick={convertTolowercase}> convertToLowerCase </button>
  </div>

<div style={{marginTop: "10px"}}>
  <button className={`btn btn-${color.buttoncolor}`} onClick={convertToupperCase}> convertToUpperCase</button>
  </div>

<div style={{marginTop: "10px"}}>
  <button className={`btn btn-${color.buttoncolor}`} onClick={trimWhiteSpaces}> trim white spaces</button>
  </div>

<div style={{marginTop: "10px"}}>
  <button className={`btn btn-${color.buttoncolor}`} onClick={toggleDark}> convert to dark mode</button>
  </div>

<div style={{marginTop: "10px"}}>
  <button className={`btn btn-${color.buttoncolor}`} onClick={toggleLight}> convert to light mode</button>
  </div>
</div>
    
    </>
  )
}

export default TextFrom
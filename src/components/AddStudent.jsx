import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddStudent() {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")

  const [age, setage] = useState("")
  const [subject, setsubject] = useState("")
  const [marks, setmarks] = useState("")

  const navigate = useNavigate()

  const postData = (e) =>{

    try{
      console.log("clicked")
      const sendData = {
        name:name,
   
    email:email,

    age:age,

    subject:subject,
    marks:marks
      }

    
   // setfirst(true);
    e.preventDefault();

    const url = "http://localhost:3002/addStudent";
    axios.post(url,sendData).then((res) =>{
      navigate("/viewStudent")
    })
    


   
}catch(error){
    console.log(error);
}
}
  return (
    <>
    
    <div className='container-fluid' style={{width: "50%"}}>

  <h1 className='text-danger d-flex justify-content-center' >Add student details</h1>
  <br /> 
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name" onChange={(e) => setname(e.target.value) }/>
    
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" onChange={(e) => setemail(e.target.value) }/>
    
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Age</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="age" onChange={(e) => setage(e.target.value) }/>
    
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">subject</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="subject"  onChange={(e) => setsubject(e.target.value) }/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Marks</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="marks" onChange={(e) => setmarks(e.target.value) }/>
  </div>

  <br />

  <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>




    </div>
    

    
    </>
  )
}

export default AddStudent
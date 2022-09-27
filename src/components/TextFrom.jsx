import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const TextFrom = ( p ) => {


  const navigate = useNavigate()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const registerAdmin = async () => {
    try {
      // console.log(edit)
      const sendData = {
        name: name,
        email: email,
        password: password
      }

      const url = "http://localhost:3002/register-admin";
      axios.post(url, sendData).then((res) => {
       
        if (res.data.success) {
          navigate("/login")
        
        }
      });



     
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <>
    
    <div className='container-fluid ' style={{width: "50%"}}>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" onChange={(e) => setname(e.target.value)} />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setemail(e.target.value)}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={(e) => setpassword(e.target.value)}/>
  </div>
  <br />
  <button type="submit" className="btn btn-primary" onClick={registerAdmin}>Submit</button>
  </div>
    
    </>
  )
}

export default TextFrom
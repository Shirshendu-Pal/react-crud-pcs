import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const [nav,setNav] = useState(false)
  const navigate = useNavigate();
  return (
    <>
    <div className='container-fluid ' style={{width: "50%"}}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <br />
  <button type="submit" className="btn btn-primary" onClick={()=>{setNav(true);  navigate("/addStudent");}}>Submit</button>
  </div>
    </>
  )
}

export default AboutUs
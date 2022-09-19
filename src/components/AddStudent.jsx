import React from 'react'

function AddStudent() {
  return (
    <>
    
    <div className='container-fluid' style={{width: "50%"}}>

  <h1 className='text-danger d-flex justify-content-center' >Add student details</h1>
  <br /> 
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name"/>
    
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Age</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="age"/>
    
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">subject</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="subject" />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Marks</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="marks" />
  </div>

  <br />

  <button type="submit" className="btn btn-primary">Submit</button>




    </div>
    

    
    </>
  )
}

export default AddStudent
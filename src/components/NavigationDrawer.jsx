import React from 'react'
import { Outlet, Link } from "react-router-dom";

function NavigationDrawer(props) {

    // console.log(props.pages.map((page) => page))
    console.log(props.page)

  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">CRUD-Project</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
            <li className="nav-item">
            <Link className="nav-link active text-light" to="/">registration</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active text-light" to="/login">login</Link>
            </li>
            {/* <li className="nav-item">
            <Link className="nav-link active text-light" to="/addStudent">add-student</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active text-light" to="/viewStudent">view-student</Link>
            </li> */}
           

            {/* <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">about</a>
            </li> */}
      
        
     </ul>
    </div>
  </div>
</nav>

<Outlet/>



    </>
  )
}

export default NavigationDrawer
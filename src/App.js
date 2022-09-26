import logo from './logo.svg';
import './App.css';
import TextFrom from './components/TextFrom';
import NavigationDrawer from './components/NavigationDrawer';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './components/AboutUs';
import AddStudent from './components/AddStudent';
import ViewStudent from './components/ViewStudent';


function App() {

  const pVariable = "this is a props from another componet";

  const pages = [
    "home",
    "About",
    "contact"
  ]

  return (
   <>
  
        <BrowserRouter>
        
      <Routes>
        <Route path="/" element={<NavigationDrawer page={pages}/>}>
          <Route index element={<TextFrom />} />
          <Route path="login" element={<AboutUs />} />
          <Route path="addStudent" element={<AddStudent />} />
          <Route path="viewStudent" element={<ViewStudent />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  
   </>
  );
}

export default App;

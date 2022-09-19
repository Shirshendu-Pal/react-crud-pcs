import logo from './logo.svg';
import './App.css';
import TextFrom from './components/TextFrom';
import NavigationDrawer from './components/NavigationDrawer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
    
   
   <Router>
   <div >
   <NavigationDrawer pages = {pages}/>
  
   
   
   <Switch>
    <Route exact path="/">

    <div style={{marginTop: "20px"}}>
   <TextFrom variable = {pVariable} />
   </div>

    </Route>
    <Route exact path="/login">

    <div style={{marginTop: "20px"}}>
      <AboutUs /> 
   </div>
   
    </Route>

    <Route exact path="/AddStudent">

    <div style={{marginTop: "20px"}}>
      <AddStudent /> 
   </div>

    </Route>

    <Route exact path="/ViewStudent">

    <div style={{marginTop: "20px"}}>
      <ViewStudent /> 
   </div>

    </Route>
   </Switch>
   </div>
   </Router>
   
   
   </>
  );
}

export default App;

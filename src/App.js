import logo from './logo.svg';
import './App.css';
import TextFrom from './components/TextFrom';
import NavigationDrawer from './components/NavigationDrawer';

function App() {

  const pVariable = "this is a props from another componet";

  const pages = [
    "home",
    "About",
    "contact"
  ]

  return (
   <>
   <div >
   <NavigationDrawer pages = {pages}/>
   </div>
   <div style={{marginTop: "20px"}}>
   <TextFrom    variable = {pVariable}  />
   </div>
   </>
  );
}

export default App;

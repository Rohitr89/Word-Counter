import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import  React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setDarkMode] = useState('light')
  const toggleMode = () =>
  {
    if(mode === 'dark')
    {
      setDarkMode('light')
      document.body.style.backgroundColor='white';
    }
    else 
    {
      setDarkMode('dark')
      document.body.style.backgroundColor='rgb(18 41 47)';
    }
  }
  return (
    <> 
      <Router>
        <Navbar title = "Text-Utils" aboutText = 'About us' mode = {mode} toggleMode = {toggleMode}/>
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
              <div className=" mt-5"><TextForm  title = "Enter something to analyze: . . .  *..*"mode = {mode}/></div>
            <Route path="/">
             
            </Route>
          </Switch>
        </div>
      </Router>
    </>
   
  );
}

export default App;

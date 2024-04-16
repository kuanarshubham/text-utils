import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {

  const [darkMode, setDarkMode] = useState("light");
  const [blueMode, setBlueMode] = useState("light");
  const [redMode, setRedMode] = useState("light");

  const toggleDarkSwitch = ()=>{
    if(darkMode ==="light"){
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setDarkMode("dark");
      setBlueMode("light");
      setRedMode("light");
    }
    else{
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setDarkMode("light");
    }
  }
  
  const toggleBlueSwitch = ()=>{
    if((blueMode ==="light")){
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
      setBlueMode("dark");
      setDarkMode("light");
      setRedMode("light");

    }
    else{
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setBlueMode("light");
    }
  }

  const toggleRedSwitch = ()=>{
    if(redMode ==="light"){
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
      setRedMode("dark");
      setDarkMode("light");
      setBlueMode("light");
    }
    else{
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setRedMode("light");
    }
  }
  

  return (
    <>
    <Navbar title= "Text-Utils" mode = {darkMode} toggleSwitch = {[toggleDarkSwitch, toggleBlueSwitch, toggleRedSwitch]} />
    {/* <Alert method = "Dark" /> */}
    <div className="container my-4">
      <TextForm title = "Enter your text" mode = {darkMode} />
    </div>
    {/* <About /> */}
    </>
  );
}

export default App;
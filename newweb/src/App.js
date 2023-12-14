import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.documentElement.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.documentElement.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="MyProject" abouttext="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze: " mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

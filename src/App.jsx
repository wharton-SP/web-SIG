import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/UI/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [theme, setTheme] = useState();

  useEffect(() => {
    const savedTheme = localStorage.getItem('webSIG-theme') || 'light';
    setTheme(savedTheme);
  }, []);

  return (
    <Router>
      <Navbar theme={theme}/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

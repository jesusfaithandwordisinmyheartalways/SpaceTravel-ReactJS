import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';




  function Load() {
    return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>

      </Router>
    
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Load />)


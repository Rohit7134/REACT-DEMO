import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import About from './About.js';
import Profile from './Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element= {<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
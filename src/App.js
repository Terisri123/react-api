import React from 'react';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './JS/Home';
import About from './JS/About';
 function App() {
  return (
    <div>
    <nav>
      <ul> 
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        </ul>
    </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';
/**
 * 1. Home.js - detta är vår startsida 
 * 2. About.js - detta är vår om-sida
 */

function App() {
  return (
    <div className="App">
      <header>
        <h1>Min sida!</h1>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/om/:id" element={ <About /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default App;

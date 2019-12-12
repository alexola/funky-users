import React from 'react';
import Navbar from './Components/Navbar';
import Oompas from './Components/Oompas';
import axios from 'axios';
import './main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Oompas />
    </div>
  );
}

export default App;

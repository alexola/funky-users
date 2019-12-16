import React from 'react';
import Navbar from './Components/Navbar';
import Oompas from './Components/Oompas';
// import Profile from './Components/Profile';
import axios from 'axios';
import './main.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <br />
      <Oompas />
      {/* <Profile /> */}
    </div>
  );
}

export default App;

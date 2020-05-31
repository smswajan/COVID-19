import React from 'react';
import './App.css';
import Stats from './Components/Stats/Stats';
import CountrySelector from './Components/CountrySelector/CountrySelector';
import Header from './Components/Header/Header';
import Swajan from './Components/Swajan/Swajan';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="stat-container">
      <h2><strong>Overall situation of the World</strong></h2>

      </div>
      <div className="stat-container">
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
      
    </div>
    <Swajan></Swajan>
    </div>
    
  );
}

export default App;

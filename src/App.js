import React from 'react';
import './App.css';
import Stats from './Components/Stats/Stats';
import CountrySelector from './Components/CountrySelector/CountrySelector';

function App() {
  return (
    <div>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
      
    </div>
  );
}

export default App;

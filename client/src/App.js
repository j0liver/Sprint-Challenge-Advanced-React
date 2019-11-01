import React from 'react';


import PlayerData from '../src/components/PlayerData'
import './App.css';

function App() {
  // const [playersData] = usePlayerData('http://localhost:5000/api/players')
  return (
    <div className="App">

      <PlayerData />
    
    </div>
  );
}

export default App;

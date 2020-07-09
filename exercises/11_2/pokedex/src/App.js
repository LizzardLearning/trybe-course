import React from 'react';
import Card from './components/Card';
import Pokelist from './data/Data';

import './App.css';

function App() {
  return (
    <div className="App">
      {Pokelist.map(pkm => <Card pokemon={pkm} />)}
    </div>
  );
}

export default App;

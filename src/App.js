import React from 'react';
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery title={"Lotto"} />
      <Lottery title={"daily"} max_num={10} ball_num={4} />
    </div>
  );
}

export default App;

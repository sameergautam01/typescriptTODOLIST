import React,{FC} from 'react';
import './App.css';

const App:FC=() => {
  return (
    <div className="App">
      <div className="tophalf">
        <input type="text" placeholder='type your reminder here ' />
        <input type="text" placeholder='Deadline ' />
      </div>
    </div>
  );
}

export default App;

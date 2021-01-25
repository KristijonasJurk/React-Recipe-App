import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {

  const APP_ID = 'f0cf7372';
  const APP_KEY = '605e21ecc6b0822b7868ce895ae88362';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run');
  });



  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button type="submit" className="search-button">
          Search
        </button>
        <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
      </form>
    </div>
  )
}

export default App;



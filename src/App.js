import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "f3c4ce9a";
  const APP_KEY = "6a9b5af03d8daa1dc7c1ff5584074bae";

  const example_req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect has been run");
  }, []);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">
          Search
        </button>
        <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
      </form>
    </div>
  );
};

export default App;

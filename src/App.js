import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        const { value } = response.data;
        setJoke(value);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{joke}</h1>
        <button className="button" onClick={fetchJoke}>
          More Jokes
        </button>
      </div>
    </div>
  );
};

export default App;

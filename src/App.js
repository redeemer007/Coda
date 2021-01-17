import React from "react";
import "./App.css";
import SelectPlayers from "./screens/SelectPlayers";
import { Route } from "react-router-dom";
import PlayGame from "./screens/PlayGame";

function App() {
  return (
    <div>
      <Route path="/game" component={PlayGame} />
      <Route path="/" component={SelectPlayers} exact />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Teams from "./teams-app";
import Header from "./teams-app/components/header";

function App() {
  return (
    <div  className="App">
      <Header></Header>
      <Teams></Teams>
    </div>
  );
}

export default App;

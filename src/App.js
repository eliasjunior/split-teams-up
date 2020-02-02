import React from "react";
import "./App.css";
import Teams from "./teams-app";
import Header from "./teams-app/components/header";
import Example from "./teams-app/components/example";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/example">
            <Example />
          </Route>
          <Route path="/">
            <Teams />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

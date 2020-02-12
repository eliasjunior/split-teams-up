import React from "react";
import "./App.css";
import Teams from "./teams-app";
import Header from "./teams-app/components/header";
import Example from "./teams-app/components/example";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/example">
            <Example />
          </Route>
          <Route path="/splitup">
            <Teams />
          </Route>
          <Route path="/">
            <div className="container">
              <div>
                <Link to="splitup">Slipt teams</Link>
              </div>
              <div>
                <Link to="example">List emails example</Link>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

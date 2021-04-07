import React from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/header";
import Example from "./components/example";
import MCMenu from "./components/Menu";
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
          <Route path="/splitup">
            <Main />
          </Route>
          <Route path="/">
            <MCMenu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

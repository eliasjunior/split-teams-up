import React from "react";
import "./App.css";
import Teams from "./teams-app";
import Header from "./teams-app/components/header";
import Example from "./teams-app/components/example";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/example">Example</Link>
              </li>
            </ul>
          </nav> */}
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/example">
              <div  className="App">
                <Header></Header>
                <Example></Example>
              </div>
            </Route>
            <Route path="/">
              <div  className="App">
                <Header></Header>
                <Teams></Teams>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}


export default App;

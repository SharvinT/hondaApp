import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import "./Main.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/bid/:id" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

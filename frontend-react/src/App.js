import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import LandingScreen from "./pages/LandingScreen";
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LandingScreen} />
        <Route path="/home" exact component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;

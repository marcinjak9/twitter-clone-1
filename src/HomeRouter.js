import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/private/Home";
import LandingPage from "./components/public/LandingPage";

export default function HomeRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

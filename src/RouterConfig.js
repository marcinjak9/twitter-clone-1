import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/private/Home";
import LandingPage from "./components/public/LandingPage";
import Profile from "./components/private/Profile";
import NotFound from "./components/public/NotFound";
import { AuthProvider } from "./hooks/UseAuth";

export default function RouterConfig() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/search/:q">
            <Home />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

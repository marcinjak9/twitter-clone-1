import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/private/Home";
import LandingPage from "./components/public/LandingPage";
import Profile from "./components/private/Profile";
import { AuthProvider, useAuth } from "./hooks/UseAuth";

export default function HomeRouter() {
  // const [token, setToken] = useState("");

  // useEffect(() => {
  //   if (token) {
  //     salvaToken(token);
  //   }
  // }, [token]);

  // useEffect(() => {
  //   chiamaToken();
  // }, []);

  // const salvaToken = (token) => {
  //   localStorage.setItem("token", `${token}`);
  // };

  // const chiamaToken = () => {
  //   const itemToken = localStorage.getItem("token");
  //   if (itemToken !== "") {
  //     setToken(itemToken);
  //   } else {
  //     console.log("token non trovato");
  //   }
  // };
  const { token, setToken } = useAuth();
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
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

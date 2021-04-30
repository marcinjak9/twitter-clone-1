import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/private/Home";
import LandingPage from "./components/public/LandingPage";

export default function HomeRouter() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if(token){
      salvaToken(token);
    } 
    console.log(1)
  }, [token]);

  useEffect(() => {
    chiamaToken();
    console.log(2)

  }, []);

  const salvaToken = (token) => {
    localStorage.setItem("token", `${token}`);
  };

  const chiamaToken = () => {
    const itemToken = localStorage.getItem("token");
    if (itemToken !== "") {
      setToken(itemToken);
    } else {
      console.log("token non trovato");
    }    
  };

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home token={token} chiamaToken={chiamaToken}/>
        </Route>
        <Route path="/">
          <LandingPage token={token} setToken={setToken} />
        </Route>
      </Switch>
    </Router>
  );
}

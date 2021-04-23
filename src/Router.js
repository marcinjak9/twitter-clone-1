import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LandingPage from './components/public/LandingPage';
import LoginForm from './components/public/LoginForm';
import RegisterForm from './components/public/RegisterForm';

export default function Router() {
    return (
        <Router>
            <LandingPage/>
            <LoginForm />
            <RegisterForm/>
        </Router>
    )
}

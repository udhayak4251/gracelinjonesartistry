import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderComponent from "./components/header/header";
import HomeComponent from "./components/home/home";
import ContactComponent from "./components/contact/contact";
import AboutComponent from "./components/about/about";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
        <HeaderComponent></HeaderComponent>
        <Route exact path={ROUTES.HOME} component={HomeComponent} />
        <Route exact path={ROUTES.ABOUT} component={AboutComponent} /> 
        <Route exact path={ROUTES.CONTACT} component={ContactComponent} /> 
    </Router>
  );
}

export default App;

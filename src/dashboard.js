import React from "react";
import './App.css';
import Navbar from './Components/Navbar/index';
import Slider from './Components/Slider/Slider';
import Products from './Components/Shop/Products'
import Main from './Components/Main/Main'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Dashboard({setIsLoggedIn}) {
  return (
    <div className="App">
      <Router>
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <Slider />
  <Route path="/Products" component={Products} />
        <Route path="/Main" component={Main} />
        </Router>
    </div>
  );
}

export default Dashboard;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginPage/LoginPage/Login"
import MainNav from "./components/MainPage/Navbar/Navbar"
import MainBody from "./components/MainPage/PostBody/PostBody"
import MainFooter from "./components/MainPage/Footer/Footer"
import Register from "./components/Register/Register/Register"



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <MainNav />
            <Route path="/" component={MainBody} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <MainFooter />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;

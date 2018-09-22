import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginPage"
import MainNav from "./components/MainPage/Navbar"
import PostBody from "./components/MainPage/PostBody"
import MainFooter from "./components/MainPage/Footer"
import Register from "./components/Register"
import Chat from "./components/Chat/Chat"



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <MainNav />
            <Route path="/" component={PostBody} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/chat" component={Chat} exact />
            <MainFooter />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;

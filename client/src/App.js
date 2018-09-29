import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginPage";
import MainNav from "./components/MainPage/Navbar";
import PostBody from "./components/MainPage/PostBody";
// import MainFooter from "./components/MainPage/Footer";
import Register from "./components/Register";
import Chat from "./components/Chat";
import Listing from "./components/Listing";
import PrivateRoute from "./components/PrivateRoute";
import Profile from './components/ProfilePage/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Router>
          <div>
            <Route path="/" component={PostBody} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/chat" component={Chat} exact />
            <Route path="/listing" component={Listing} exact />
            <PrivateRoute path="/chat" component={Chat} exact />
            <Route path="/profile" component={Profile} />
          </div>
        </Router>
        {/* <MainFooter /> */}
      </div>
    )
  }
}

export default App;

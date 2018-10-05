import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginPage";
import PostBody from "./components/MainPage/PostBody";
// import MainFooter from "./components/MainPage/Footer";
import Landing from "./components/Landing"
import Register from "./components/Register";
import Item from "./components/Item";
import Chat from "./components/chat";
import Listing from "./components/Listing";
import PrivateRoute from "./components/PrivateRoute";
import Profile from './components/ProfilePage/Profile';
import Edit from './components/EditProfile/Edit';
import YourList from "./components/YourList";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" component={Landing} exact />
            <PrivateRoute path="/main" component={PostBody} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <PrivateRoute path="/item/:id" component={Item} exact />
            <PrivateRoute path="/listing" component={Listing} exact />
            <PrivateRoute path="/chat" component={Chat} exact />
            <PrivateRoute path="/edit-profile" component={Edit} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/item/user/:id" component={YourList} />
          </div>
        </Router>
        {/* <MainFooter /> */}
      </div>
    ) 
  }
}

export default App;

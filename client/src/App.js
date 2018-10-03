import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginPage";
import MainNav from "./components/MainPage/Navbar";
import PostBody from "./components/MainPage/PostBody";
// import MainFooter from "./components/MainPage/Footer";
import Landing from "./components/Landing"
import Register from "./components/Register";
import Item from "./components/Item";
import Chat from "./components/Chat";
import Listing from "./components/Listing";
import PrivateRoute from "./components/PrivateRoute";
import Profile from './components/ProfilePage/Profile';
import Edit from './components/EditProfile/Edit';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Router>
          <div>
            {/* <Route path="/" component={Home} exact /> */}
            <Route path="/" component={Landing} exact />
            <PrivateRoute path="/main" component={PostBody} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <PrivateRoute path="/api/item/:id" component={Item} exact />
            <PrivateRoute path="/listing" component={Listing} exact />
            {/* <PrivateRoute path="/user/listing" component={Chat} exact /> */}
            <PrivateRoute path="/chat" component={Chat} exact />
            <Route path="/profile" component={Profile} />
            <Route path="/edit-profile" component={Edit} />
          </div>
        </Router>
        {/* <MainFooter /> */}
      </div>
    ) 
  }
}

export default App;

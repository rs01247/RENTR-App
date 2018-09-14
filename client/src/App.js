import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from "./components/LoginPage/LoginPage/Login"
import MainNav from "./components/MainPage/Navbar/Navbar"
import MainBody from "./components/MainPage/PostBody/PostBody"
import MainFooter from "./components/MainPage/Footer/Footer"
import Register from "./components/Register/Register/Register"

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <MainNav />
         <MainBody />
        <MainFooter /> 
        <Register />
      </div>
    );
  }
}



export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginPage/LoginPage/Login"
import MainNav from "./components/MainPage/Navbar"
import PostBody from "./components/MainPage/PostBody/PostBody"
import MainFooter from "./components/MainPage/Footer/Footer"
import Register from "./components/Register/Register/Register"



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
            <MainFooter />
          </div>


        </Router>
      </div>
    )
  }
}




// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Login />
//         <MainNav />
//          <MainBody />
//         <MainFooter /> 
//         <Register />
//       </div>
//     );
//   }
// }



export default App;

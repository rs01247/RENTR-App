import React from "react";
import "./Navbar.css";

const Navbar = () => (




  <nav className="navbar navbar-expand-lg p-3 mb-1 p-1 mb-1 bg-dark text-white">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only" id="navbar-home">(current)</span></a>
        </li>
        <div>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="navbar-dropdown">
              Dropdown
        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">Action</a>
              <a className="dropdown-item" href="/">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Something else here</a>
            </div>
          </li>
        </div>
        <li className="nav-item">
          <a className="nav-link disabled" id="navbar-disabled" href="/">Disabled</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./login" id="Login"> 
            <button type="button" className="btn btn-primary">Login</button>
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./register" id="Register"> 
            <button type="button" className="btn btn-primary">Register</button>
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./chat" id="Chat"> 
            <button type="button" className="btn btn-primary">Chat</button>
          </a>
          
        </li>
      </ul>
          
      <h1 id="title">APP NAME!</h1>


    </div>




  </nav>


);

export default Navbar;


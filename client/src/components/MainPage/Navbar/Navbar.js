import React from "react";
import "./Navbar.css";

const Navbar = () => (

 


<nav class="navbar navbar-expand-lg p-3 mb-1 p-1 mb-1 bg-dark text-white">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only" id="navbar-home">(current)</span></a>
      </li>
  <div>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="navbar-dropdown">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      </div>
      <li class="nav-item">
        <a class="nav-link disabled" id="navbar-disabled" href="#">Disabled</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login" id="login"> <button type="button" class="btn btn-primary">Login</button>
        <a class="btn btn-social-icon btn-twitter">
        
    
  </a>
</a>
      </li>
    </ul>

        <h1 id="title">APP NAME!</h1>

<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search..."></input>
 
  </div>



  
  </nav>


);

export default Navbar;


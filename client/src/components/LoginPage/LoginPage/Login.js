import React from "react";
import "./Login.css";





const Login = () => (
  
<div>


    <body id="login-form">
    <div className="container">
    <div className="login-form">
    <div className="main-div">
    <div class="panel">
    <h2>Login</h2>
    <p>Enter your UserName and Password to Login!</p>

    <form id="username">
    <div className="form-group">
    <input type ="email" className="form-control" id="inputUsername" placeholder ="UserName"></input>
    </div>
    </form>

    
    <form id="password">
    <div className="form-group">
    <input type ="password" className="form-control" id="inputPassword" placeholder ="Password"></input>
    </div>
    </form>

        <button type="submit" class="btn btn-primary">Login</button>

        <span id="register-button">Not Registered? Click <a href="/register">Here</a></span>
       

        {/* <div className="social-buttons">
        <a href="#" class="fa  ml-2 fa-facebook"></a>
         <a href="#" class="fa ml-2 fa-twitter"></a>
        <a href="#" class="fa ml-2 fa-google"></a>
         <a href="#" class="fa ml-2 fa-snapchat"></a>
         <a href="#" class="fa ml-2 fa-linkedin"></a>
         <a href="#" class="fa ml-2 fa-yahoo"></a>
         <a href="#" class="fa ml-2 fa-instagram"></a>
        <a href="#" class="fa ml-2 fa-youtube"></a>
         <a href="#" class="fa ml-2 fa-spotify"></a>
         </div> */}











    </div>
    </div>
    </div>
    </div>
    </body>










</div>

)


export default Login;
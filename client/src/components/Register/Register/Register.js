import React from "react";
import "./Register.css"




const Register = () => (
    
    <div>
<body id="login-form">
    <div className="container">
    <div className="login-form">
    <div className="main-div">
    <div class="panel">
    <h1 id="heading">Register</h1>
    

    <form id="username">
    <div className="form-group">
    <input type ="username" className="form-control" id="registerFirstname" placeholder ="First Name"></input>
    </div>
    </form>

    
    <form id="password">
    <div className="form-group">
    <input type ="username" className="form-control" id="regsiterLastname" placeholder ="Last Name"></input>
    </div>
    </form>

     <form id="password">
    <div className="form-group">
    <input type ="password" className="form-control" id="registerUsername" placeholder ="UserName"></input>
    </div>
    </form>

     <form id="password">
    <div className="form-group">
    <input type ="password" className="form-control" id="regsiterPassword" placeholder ="Password"></input>
    </div>
    </form>

        <button type="submit" class="btn btn-primary">Submit</button>
        
        <a href="/login" id="cancel">Cancel</a>
       



    </div>
    </div>
    </div>
    </div>
    </body>

    </div>
)




export default Register;
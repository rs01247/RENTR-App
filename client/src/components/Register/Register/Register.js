import React, { Component } from "react";
import "./Register.css"
import axios from "axios";


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {

            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password: ""

        }
    }

    onChange = e => this.setState ({
        [e.target.name]: e.target.value
    })
     
    submit = e => {
        e.preventDefault();
        // Change the "/" route;
        axios.post("/",  {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            userName: this.userName,
            password: this.password
        })
        .then(res => {
            //Change the "/" route;
            window.location.assign("/" + res.data.id);
        })
        .catch(e => {
            console.error(e)
          })
    }
    render(){
        return(
            <div>
            <body id="login-form">
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h1 id="heading">Register</h1>
    
    
                                <form id="username">
                                    <div className="form-group">
                                        <input type="username" className="form-control" id="registerFirstname" name="firstName" placeholder="First Name"></input>
                                    </div>
                                </form>
    
    
                                <form id="password">
                                    <div className="form-group">
                                        <input type="username" className="form-control" id="regsiterLastname" name="lastName" placeholder="Last Name"></input>
                                    </div>
                                </form>
    
                                <form id="password">
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="registerUsername" name="userName" placeholder="UserName"></input>
                                    </div>
                                </form>
    
                                <form id="password">
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="regsiterPassword"  name="passWord" placeholder="Password"></input>
                                    </div>
                                </form>
    
                                <button type="submit" className="btn btn-primary">Submit</button>
    
                                <a href="/login" id="cancel">Cancel</a>
    
    
    
    
                            </div>
                        </div>
                    </div>
                </div>
            </body>
    </div>
        )
    }
}

{/* const Register = () => (

    <div>
        <body id="login-form">
            <div className="container">
                <div className="login-form">
                    <div className="main-div">
                        <div class="panel">
                            <h1 id="heading">Register</h1>


                            <form id="username">
                                <div className="form-group">
                                    <input type="username" className="form-control" id="registerFirstname" placeholder="First Name"></input>
                                </div>
                            </form>


                            <form id="password">
                                <div className="form-group">
                                    <input type="username" className="form-control" id="regsiterLastname" placeholder="Last Name"></input>
                                </div>
                            </form>

                            <form id="password">
                                <div className="form-group">
                                    <input type="password" className="form-control" id="registerUsername" placeholder="UserName"></input>
                                </div>
                            </form>

                            <form id="password">
                                <div className="form-group">
                                    <input type="password" className="form-control" id="regsiterPassword" placeholder="Password"></input>
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
 */}



export default Register;
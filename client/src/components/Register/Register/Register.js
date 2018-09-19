import React, { Component } from 'react';
import axios from "axios";
import "./Register.css"

class Register extends Component {


    componentDidMount() {
        axios.post()
    }

    render() {
        return (
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
                                            <input type="password" className="form-control" id="registerPassword" placeholder="Password"></input>
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
    }
}

export default Register;
import React, { Component } from "react";
import "./Login.css";



class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",


        }
    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="login-form">
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h2>Login</h2>
                                <p>Enter your UserName and Password to Login!</p>

                                <form id="username">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="inputUsername" name="userName" placeholder="UserName" onChange={this.onChange}></input>
                                    </div>
                                </form>


                                <form id="password">
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Password" onChange={this.onChange}></input>
                                    </div>
                                </form>

                                <button type="submit" className="btn btn-primary">Login</button>

                                <span id="register-button">Not Registered? Click <a href="/register">Here</a></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default Login;
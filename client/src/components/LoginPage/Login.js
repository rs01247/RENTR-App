import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import authHelpers from "../../helpers/auth.helpers";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",


        }
    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        console.log("asd")
        e.preventDefault();
        axios.post("/auth/login", this.state)
            .then(function (resp) {
                console.log(resp);
                authHelpers.saveToken(resp.data.token)
            })
            .catch(function (err) {
                console.error(err);
            })
    }
    render() {
        return (
            <div className="login-form">
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                            <form>
                                <h2>Login</h2>
                                <p>Enter your UserName and Password to Login!</p>

                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="asd@asd.net..." onChange={this.onChange.bind(this)} />
                                </div>


                                <div className="form-group">
                                    <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Password" onChange={this.onChange.bind(this)} />
                                </div>

                                <button type="submit" className="btn btn-primary" onClick={this.submit.bind(this)}>Login</button>

                                <span id="register-button">Not Registered? Click <a href="/register">Here</a></span>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default Login;
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
        e.preventDefault();
        axios.post("/auth/login", this.state)
            .then(function (resp) {
                console.log(resp);
                authHelpers.saveToken(resp.data.token)
                window.location = "/"
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
                        <div className="main-div rounded">
                            <div className="panel">
                            <form>
                                <h2>Login</h2>
                                <p style={{fontSize: "1em"}}>Please enter your credentials</p>

                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.onChange.bind(this)} />
                                </div>


                                <div className="form-group">
                                    <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Password" onChange={this.onChange.bind(this)} />
                                </div>

                                <button type="submit" className="btn btn-primary" onClick={this.submit.bind(this)}>Login</button>

                                <p id="register-button">Not Registered? Click <a href="/register">Here</a></p>
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
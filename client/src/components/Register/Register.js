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
            location: "",
            phoneNumber: "",
            userName: "",
            password: ""
        }
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value

    })

    submit(e) {
        console.log("USER CREATED")
        e.preventDefault();
        axios.post("/auth/register", this.state)
            .then(function (resp) {
                console.log(resp);
                window.location = "/login"
            })
            .catch(function (err) {
                console.error(err);
            })
    }

    render() {
        return (
            <div>
                <div className="login-form">
                    <div className="container">
                        <div className="login-form">
                            <div className="main-div rounded">
                                <div className="panel">
                                    <h2 id="heading">Register</h2>
                                    <p style={{ fontSize: "1em" }}>Please fill out your information</p>
                                    <form>
                                        <div className="form-group">
                                            <input type="username" className="form-control" id="registerFirstname" name="firstName" value={this.state.firstName} onChange={this.onChange} placeholder="First Name"></input>
                                        </div>

                                        <div className="form-group">
                                            <input type="username" className="form-control" id="regsiterLastname" name="lastName" value={this.state.lastName} onChange={this.onChange} placeholder="Last Name"></input>
                                        </div>

                                        <div className="form-group">
                                            <input type="email" className="form-control" id="registerEmail" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email"></input>
                                        </div>

                                        <div className="form-group">
                                            <input type="location" className="form-control" id="registerLocation" name="location" value={this.state.location} onChange={this.onChange} placeholder="Enter Zip Code"></input>
                                        </div>

                                        <div className="form-group">
                                            <input type="phoneNumber" className="form-control" id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} placeholder="Phone Number"></input>
                                        </div>

                                        <div className="form-group">
                                            <input type="username" className="form-control" id="registerUsername" name="userName" value={this.state.userName} onChange={this.onChange} placeholder="UserName"></input>
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control" id="regsiterPassword" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password"></input>
                                        </div>

                                        {/* submit or click */}
                                        <button type="submit" className="btn btn-primary" onClick={this.submit.bind(this)}>Register</button>
                                        <a href="/login" id="cancel">Cancel</a>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





export default Register;
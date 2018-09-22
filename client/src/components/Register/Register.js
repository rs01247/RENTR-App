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




    onClick = e => {
        e.preventDefault();
        // Change the "/" route;
        axios.post("api/user/", {

            // console.log(this.state.firstName)
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            location: this.state.location,
            phoneNumber: this.state.phoneNumber,
            userName: this.state.userName,
            password: this.state.password
            // console.log(this.state.firstName, this.state.lastName, this.state.email)
        })
            .then(res => {
                //Change the "/" route;
                window.location.assign("/users/" + res.data.id);
                console.log(res)
            })
            .catch(e => {
                console.error(e)
            })

    

    }
    render() {
        return (
            <div>
                <div className="login-form">
                    <div className="container">
                        <div className="login-form">
                            <div className="main-div">
                                <div className="panel">
                                    <h1 id="heading">Register</h1>


                                    <form id="username">
                                        <div className="form-group">
                                            <input type="username" className="form-control" id="registerFirstname" name="firstName" value={this.state.firstName} onChange={this.onChange} placeholder="First Name"></input>
                                        </div>
                                    </form>


                                    <form id="password">
                                        <div className="form-group">
                                            <input type="username" className="form-control" id="regsiterLastname" name="lastName" value={this.state.lastName} onChange={this.onChange} placeholder="Last Name"></input>
                                        </div>
                                    </form>

                                    <form id="email">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="registerEmail" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email"></input>
                                        </div>
                                    </form>

                                     <form id="location">
                                        <div className="form-group">
                                            <input type="location" className="form-control" id="registerLocation" name="location" value={this.state.location} onChange={this.onChange} placeholder="Enter Zip Code"></input>
                                        </div>
                                    </form>

                                     <form id="phoneNumber">
                                        <div className="form-group">
                                            <input type="phoneNumber" className="form-control" id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} placeholder="Phone Number"></input>
                                        </div>
                                    </form>

                                    <form id="password">
                                        <div className="form-group">
                                            <input type="username" className="form-control" id="registerUsername" name="userName" value={this.state.userName} onChange={this.onChange} placeholder="UserName"></input>
                                        </div>
                                    </form>

                                    <form id="password">
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="regsiterPassword" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password"></input>
                                        </div>
                                    </form>
                                    {/* submit or click */}
                                    <button type="click" onClick={this.onClick} className="btn btn-primary">Submit</button>

                                    <a href="/login" id="cancel">Cancel</a>




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
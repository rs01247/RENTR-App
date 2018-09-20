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
        axios.post("./api/controllers",  {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            userName: this.userName,
            password: this.password
        })
        .then(res => {
            //Change the "/" route;
            window.location.assign("/" + res.data.id);
            console.log(res)
        })
        .catch(e => {
            console.error(e)
          })
    }
    render(){
        return(
            <div>
            <div className="login-form">
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h1 id="heading">Register</h1>
    
    
                                <form id="username">
                                    <div className="form-group">
                                        <input type="username" className="form-control" id="registerFirstname" name="firstName" value ={this.state.firstName} onChange = {this.onChange} placeholder="First Name"></input>
                                    </div>
                                </form>
    
    
                                <form id="password">
                                    <div className="form-group">
                                        <input type="username" className="form-control" id="regsiterLastname" name="lastName"  value ={this.state.lastName} onChange = {this.onChange} placeholder="Last Name"></input>
                                    </div>
                                </form>

                                  <form id="email">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="registerEmail" name="email"  value ={this.state.email} onChange = {this.onChange} placeholder="Email"></input>
                                    </div>
                                </form>
    
                                <form id="password">
                                    <div className="form-group">
                                        <input type="username" className="form-control" id="registerUsername" name="userName"  value ={this.state.userName} onChange = {this.onChange} placeholder="UserName"></input>
                                    </div>
                                </form>
    
                                <form id="password">
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="regsiterPassword"  name="passWord" value ={this.state.password} onChange = {this.onChange} placeholder="Password"></input>
                                    </div>
                                </form>
    
                                <button type="submit" className="btn btn-primary">Submit</button>
    
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
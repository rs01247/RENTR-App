import React, { Component } from "react";
import "./Profile.css";
import axios from "../../helpers/authenticated.axios"

class Profile extends Component {
    constructor(props){
        super(props)
    }

    state = {
        userId: null,
        firstName: "",
        lastName: "",
        location: "",
        Email: "",
        phoneNumber: ""

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    grabData() {
        axios.get("api/user/")
            .then((res) => {
                console.log("meme",res.data);
                this.setState({
                    userId:res.data[0].id,
                    firstName: res.data[0].firstName,
                    lastName: res.data[0].lastName,
                    email: res.data[0].email,
                    location: res.data[0].location,
                    phoneNumber: res.data[0].phoneNumber
                })                
                console.log(res.data[0].id)
            })
            .catch((err) => {
                console.error(err);
            })
    }

    submit(e) {
        e.preventDefault(e);
        console.log("submitting...")
        axios.put("/api/user/" + this.state.userId, 
        {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            location: this.state.location,
            phoneNumber: this.state.phoneNumber   
        }
        )
        .then((res) => {
            this.setState(
                {
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                location: res.data.location,
                phoneNumber: res.data.phoneNumber,
            })
        
            console.log(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
    }



    //put only when submit is run  
    //axios.put 


    componentDidMount() {
        this.grabData()
    
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h1>UserName</h1>
                        </div>

                        <div className="col-sm-9">
                            <h3>Your Profile</h3>
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="edit-profile">Edit</a></li>
                            </ul>
                            <a data-toggle="tab" href="/profile">Profile</a>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-sm-3">
                            <img src={"./sexy-dane.jpg"} alt="img-placeholder"></img>
                            <br></br>

                            <button type="submit" onClick={this.submit.bind(this)}>Submit New Photo...</button>
                            <br></br>



                        </div>
                        <div className="col-sm-9">
                            <div className="card">
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                First Name
                                                <input type="text" 
                                                className="form-control" 
                                                name="firstName" 
                                                placeholder="First Name" 
                                                value={this.state.firstName} 
                                                onChange={this.onChange} />
                                            </h4>

                                            <hr></hr>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                Last Name
                                                <input type="text" 
                                                className="form-control" 
                                                name="lastName" 
                                                placeholder="Last Name" 
                                                value={this.state.lastName} 
                                                onChange={this.onChange} />
                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                Location
                                                <input type="text" 
                                                className="form-control" 
                                                name="location" 
                                                placeholder="Location" 
                                                value={this.state.location} 
                                                onChange={this.onChange} />


                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                Email
                                                <input type="text" 
                                                className="form-control" 
                                                name="email" 
                                                placeholder="email" 
                                                value={this.state.email} 
                                                onChange={this.onChange} />
                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                Phone Number
                                                <input type="text" 
                                                className="form-control" 
                                                name="phoneNumber" 
                                                placeholder="Phone Number" 
                                                value={this.state.phoneNumber} 
                                                onChange={this.onChange} />


                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-9">
                            <br></br>
                            {/* <button id="profile-submit">Submit</button> */}
                            <button type="submit" className="btn btn-primary" onClick={this.submit.bind(this)}>Submit</button>

                        </div>
                    </div>
                </div>





                {/* do not pass here */}


            </div>

            





        )
    }
}



export default Profile


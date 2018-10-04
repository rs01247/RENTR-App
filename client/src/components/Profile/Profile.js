import React, { Component } from "react";
import "./Profile.css";
import axios from "../../helpers/authenticated.axios"

class Profile extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        userId: null,
        firstName: "",
        lastName: "",
        location: "",
        email: "",
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
                console.log("meme", res.data);
                this.setState({
                    userId: res.data[0].id,
                    firstName: res.data[0].firstName,
                    lastName: res.data[0].lastName,
                    email: res.data[0].email,
                    location: res.data[0].location,
                    phoneNumber: res.data[0].phoneNumber
                })
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err);
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
                            <h1>Your Profile</h1>
                        </div>

                        <div className="col-sm-9">
                            <h3></h3>
                            <ul className="nav nav-tabs">
                            <button class="btn btn-primary btn-md text-white" id="edit-button"><li className="active"><a data-toggle="tab" href="edit-profile">Edit</a></li></button>
                            </ul>
                            <button class="btn btn-primary btn-md text-white" id="profile-button"><a data-toggle="tab" href="/profile">Profile</a></button>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-sm-3">
                            <img src={"./sexy-dane.jpg"} alt="img-placeholder" id="img"></img>
                            <br></br>

                            {/* <button type="submit" onClick={this.submit.bind(this)}>Submit New Photo...</button> */}



                        </div>
                        <div className="col-sm-9">
                            <div className="card">
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                              {this.state.firstName}
                                            </h4>

                                            <hr></hr>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                               {this.state.lastName}
                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                             {this.state.location}
                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                            {this.state.email}
                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                {this.state.phoneNumber}
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
                            {/* <button type="submit" className="btn btn-primary" onClick={this.submit.bind(this)}>Submit</button> */}

                        </div>
                    </div>
                </div>








            </div>

        )
    }

}

















export default Profile;


import React, { Component } from "react";
import "./Profile.css";
import axios from "../../helpers/authenticated.axios"

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    //fix this later. 
    submit(e) {
        console.log("it works!")
        e.preventDefault(e)
        // axios.get("auth/regsiter/", this.state)
        //     .then(function (resp) {
        //         console.log(resp)
        //         this.setState({events: resp.data})
        //             .catch(function (err) {
        //                 console.error(err);
        //             })

        //         })
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
                        </div>




                    </div>

                    <div className="row">

                        <div className="col-sm-3">
                            <img src={"./sexy-dane.jpg"} alt="img-placeholder"></img>
                            <br></br>

                            <button type="file" onClick={this.submit.bind(this)}>Submit New Photo...</button>
                            <br></br>



                        </div>


                        <div className="col-sm-9">
                            <div className="card">
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                First Name
                                                <br></br>
                                                <input type="firstName" className="form-control" name="firstName" placeholder="First Name" onSubmit={this.submit.bind(this)} />


                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                Last Name
                                                <br></br>
                                                <input type="lastName" className="form-control" name="lastName" placeholder="Last Name" onSubmit={this.submit.bind(this)} />


                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                Email
                                                <br></br>
                                                <input type="Email" className="form-control" name="Email" placeholder="Email" onSubmit={this.submit.bind(this)} />


                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                Location
                                                <br></br>
                                                <input type="location" className="form-control" name="location" placeholder="Location" onSubmit={this.submit.bind(this)} />


                                            </h4>
                                            <hr></hr>
                                        </div>
                                    </div>





                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                Phone Number
                                                <br></br>
                                                <input type="phoneNumber" className="form-control" name="phoneNumber" placeholder="Phone Number" onSubmit={this.submit.bind(this)} />


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


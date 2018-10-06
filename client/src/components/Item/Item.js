import React, { Component } from "react";
import Chat from "../chat"
import Stripe from "../Stripe/Stripe"
import MainNav from "../MainPage/Navbar";
import "./Item.css";
import axios from "../../helpers/authenticated.axios";
import Map from "./Map.js";
import Geocode from "react-geocode";
import authHelpers from "../../helpers/auth.helpers"
// import emailer from "../../helpers/email.helpers"

Geocode.setApiKey("AIzaSyA0-hwLFqBPHf5yphF-d0fymZKTv2vWNkU");


class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            userData: {},
            ownData: {},
            id: this.props.match.params.id,
            location: this.props.match.params.location,
            // lat: this.props.match.params.lat,
            // lng: this.props.match.params.lng
            lat: "",
            lng: ""
        }
    }

    componentDidMount() {
        this.displayItem();
        this.displayYourself();
    }

    submit(e) {
        e.preventDefault();

        const token = authHelpers.getToken();
        const payload = authHelpers.parseToken(token)
        console.log(payload)
        axios.post("/api/email/send", {
            to: this.state.userData.email,
            from: "rentrcontroller@gmail.com",
            subject: `A RENTR would like to rent ${this.state.data.itemName}`,
            text: `Hello
            
            ${this.state.ownData.userName} has requested to be your RENTR for ${this.state.data.itemName}.

            If you accept this request, please access your listings page on RENTR and change the status of "Available" to FALSE.

            ${this.state.ownData.userName} will be notified of your acceptance. 

            Thank you!
            `,
            html: `<strong>Hello</strong>
            <br><br>
            ${this.state.ownData.userName} has requested to be your RENTR for ${this.state.data.itemName}.
            <br><br>
            If you accept this request, please access your listings page on RENTR and change the status of "Available" to FALSE.
            <br><br>
            ${this.state.ownData.userName} will be notified of your acceptance. 
            <br><br>
            <strong>Thank you for using RENTR!</strong>`
        })
            .then((res) => {
                console.log("SEND")
            })
            .catch((err) => {
                console.error(err);
            })
    }

    displayItem() {
        console.log(this.state.id);
        axios.get(`/api/item/${this.state.id}`)
            .then((res) => {
                this.setState({ data: res.data })
                this.displayUser();
                this.convertZip();
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    displayUser() {
        console.log(this.state.data.UserId)
        axios.get(`/api/user/${this.state.data.UserId}`)
            .then((res) => {
                this.setState({ userData: res.data[0] })
                console.log(this.state.userData)
            })
            .catch((err) => {
                console.error(err);
            })
    }

    displayYourself() {
        const token = authHelpers.getToken();
        const payload = authHelpers.parseToken(token)
        console.log(payload);
        axios.get(`/api/user/${payload.userID}`)
            .then((res) => {
                this.setState({ ownData: res.data[0] })
                console.log(this.state.ownData);
            })
            .catch((err) => {
                console.error(err);
            })

    }
    convertZip() {
        // axios.get(`/api/user/${this.state.data.UserId}`)
        //     .then((res) => {
        //         this.setState({ location: res.data.location })
        //         console.log(this.state.location);
        Geocode.fromAddress(this.state.data.location).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                //   console.log(lat, lng);
                this.setState({ lat: lat });
                this.setState({ lng: lng });
                //   console.log("lat: " + this.state.lat);
                //   console.log("lng: " + this.state.lng)
            },
            error => {
                console.error(error);
            }
        )
            .catch((err) => {
                console.error(err);
            })
    }



    render() {
        return (
            <div>
                <MainNav />
                <div className="main container mt-4">
                    <div className="jumbotron bg-white shadow-lg">
                        <div className="row mb-3">
                            <h2 id="item-name">{this.state.data.itemName}</h2>
                            <button type="click" onClick={this.submit.bind(this)} className="btn btn-warning ml-4 justify-content-end">REQUEST ITEM</button>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="item-div row">
                                    <img className="item-img" src={this.state.data.image} />
                                </div>
                            </div>
                            <div className="col-4 p-1">
                                <div className="item-div row">
                                    <h3>Listed by {this.state.userData.userName}</h3>
                                    <h5>{this.state.data.createdAt}</h5>
                                </div>
                                <div className="item-div row">
                                    <p>{this.state.data.description}</p>
                                </div>
                                <div className="item-div row">
                                    <p style={{ fontSize: "1rem" }}>{`Available to Rent in ${this.state.data.location}`}</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <Map lat={this.state.lat} lng={this.state.lng} />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <Chat
                                    key={this.state.id}
                                    id={this.state.userData.id}
                                    ownName={this.state.ownData.userName} />
                            </div>
                            <div className="col-6 mt-3">
                                <Stripe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Item

import React, { Component } from "react";
import Geocode from "react-geocode";
// import gmp from "google-map-react";
import Chat from "../Chat"
import "./Item.css";
import axios from "../../helpers/authenticated.axios";

Geocode.setApiKey("AIzaSyA0-hwLFqBPHf5yphF-d0fymZKTv2vWNkU");

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            id: this.props.match.params.id,
            location: this.props.match.params.location

        }
        
    }

    
    componentDidMount() {
        console.log("We did mount Item");
        axios.get(`/api/item/${this.state.id}`)
            .then((res) => {
                console.log("the res is ", res);
                this.setState({ data: res.data})
                Geocode.fromAddress(this.state.data.location).then(
                    response => {
                        console.log("location " + this.state.data.location);
                      const { lat, lng } = response.results[0].geometry.location;
                      console.log("lattitude and longitude is " + lat, lng);
                      this.setState({location: response })
                    
                }, );
            })
            .catch((err) => {
                console.error(err);
            })
           
    }

    
    render() {
        console.log(this.state.data)
        return (
            <div className="container">
                <div className="jumbotron bg-light shadow-lg">
                    <div className="row mb-3">
                        <h2 id="item-name">{this.state.data.itemName} </h2>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <img className="item-img" src={this.state.data.image} />
                            </div>
                        </div>
                        <div className="col-4 p-1">
                            <div className="row">
                                <p style={{ fontSize: "1rem" }}>{`Available to Rent in ${this.state.data.location}`}</p>
                            </div>
                            <div className="row">
                                <p>{this.state.data.description}</p>
                            </div>
                        </div>
                        <div className="col-4 border border-secondary">
                            {/* THIS IS WHERE GOOGLE MAPS CAN GO */}
                        </div>
                    </div>
                    <div className="row mt-4">
                        <Chat />
                    </div>
                </div>
            </div>

        )
    }
}

export default Item
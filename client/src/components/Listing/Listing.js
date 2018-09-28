import React, { Component } from 'react';
import axios from "../../helpers/authenticated.axios";
import "./Listing.css";

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: "",
            itemName: "",
            image: "",
            description: ""
        }
    }


    onChange = e => this.setState({
        [e.target.name]: e.target.value

    })

    onClick = e => {
        e.preventDefault();
            axios.post("api/item", {
                location: this.state.location,
                itemName: this.state.itemName,
                image: this.state.image,
                description: this.state.description
            })
            .then(res => {
                window.location = "/"
                console.log(res)
            })
            .catch(e => {
                console.error(e)
            })
    }


    render() {
        return (
            <div className="login-form">
                <div className="container">
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h2 id="heading">List an Item</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="item-name" name="itemName" value={this.state.itemName} onChange={this.onChange} placeholder="Name of Item"></input>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" className="form-control" id="item-description" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" rows="2"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="item-location" name="location" value={this.state.location} onChange={this.onChange} placeholder="Your Zip Code"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="item-image" name="image" value={this.state.image} onChange={this.onChange} placeholder="Item Image"></input>
                                    </div>
                                </form>
                                <button type="click" onClick={this.onClick} className="btn btn-primary">Post Listing</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listing;
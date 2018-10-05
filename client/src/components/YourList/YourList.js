import React, { Component } from "react";
import axios from "../../helpers/authenticated.axios";
import MainNav from "../MainPage/Navbar"
import "./YourList.css"

class YourList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            userData: {},
            userID: this.props.match.params.id
        }
    }

    componentDidMount() {
        this.displayUserItem();
        this.displayUser();
    }


    onClick = e => {
        e.preventDefault();
        axios.put(`/api/item/user/${e.target.id}`, {
            isAvailable: false
        })
            .then(() => {
                this.displayUserItem();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    displayUserItem() {
        axios.get(`/api/item/user/${this.state.userID}`)
            .then((res) => {
                this.setState({ data: res.data })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    displayUser() {
        axios.get(`/api/user/${this.state.userID}`)
            .then((res) => {
                this.setState({ userData: res.data[0] })
            })
            .catch((err) => {
                console.error(err);
            })
    }


    render() {
        return (
            <div>
                <MainNav />
                <div className="container mt-4">
                    <div className="jumbotron bg-white shadow-lg">
                        <div className="row">
                            <h2 id="listing">{this.state.userData.firstName}'s Listings</h2>
                        </div>

                        <table className="table thead-dark">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Item Image</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Updated</th>
                                    <th scope="col">Available</th>
                                </tr>
                            </thead>
                            {this.state.data.map(item => (
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            {item.id}
                                        </th>
                                        <td>
                                            <a href="">
                                                <img className="user-item" src={item.image} alt={item.itemName} />
                                            </a>
                                        </td>
                                        <td>
                                            {item.itemName}
                                        </td>
                                        <td>
                                            {item.description}
                                        </td>
                                        <td>
                                            {item.createdAt}
                                        </td>
                                        <td>
                                            {item.updatedAt}
                                        </td>
                                        <td className="text-center">
                                            <h5 style={{color: "#007bff"}}>{item.isAvailable.toString().toUpperCase()}</h5>
                                            <button id={item.id} type="click" onClick={this.onClick} className="btn btn-secondary btn-sm">UPDATE</button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}

                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default YourList;
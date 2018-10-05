import React, { Component } from "react";
import UserSelect from "../UserSelect";
import Recent from "../Recent";
import Itembox from "../Itembox";
import MainNav from "../Navbar";
import axios from "../../../helpers/authenticated.axios";
import authHelpers from "../../../helpers/auth.helpers";
import "./PostBody.css";

class PostBody extends Component {

    state = {
        data: []
    };

    componentDidMount() {
        this.displayData();
    }

    displayData() {
        axios.get("/api/item")
            .then((res) => {
                this.setState({ data: res.data || [] })
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        const token =authHelpers.getToken();
        const payload = authHelpers.parseToken(token);
        console.log(payload);
        return (
            <div>
                <MainNav />
                <div className="container">
                    <UserSelect 
                        userID = {payload.userID}
                    />
                    <Recent>
                        {this.state.data.map(item => (
                            <Itembox
                                location={item.location}
                                itemName={item.itemName}
                                image={item.image}
                                description={item.description}
                                date={item.date}
                                isAvailable={item.isAvailable}
                                createdAt={item.createdAt}
                                key={item.id}
                                id={item.id}
                            />
                        ))}
                    </Recent>
                </div>
            </div>  
        )
    }
}

export default PostBody 
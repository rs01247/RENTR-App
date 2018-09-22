import React, { Component } from "react";
import Itembox from "../Itembox";
import axios from "axios";
import "./PostBody.css"

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
                this.setState({data: res.data})
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        return (
            <div>
                {this.state.data.map(item => (
                    <Itembox
                        location={item.location}
                        description={item.description}
                        date={item.date}
                        isAvailable={item.isAvailable}
                        key={item.id}
                        id={item.id}
                    />
                ))}
            </div>
        )
    }

}

export default PostBody 
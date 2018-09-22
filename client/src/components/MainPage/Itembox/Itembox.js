import React from "react";
import "./Itembox.css";

const Itembox = props => (
    <div className="item-card">
        {/* <a href = "/items/{props.id}">link to item</a> */}
        {props.location} | {props.description} | {props.date} | {props.isAvailable}
    </div>
);

export default Itembox;
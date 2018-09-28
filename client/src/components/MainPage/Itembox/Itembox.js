import React from "react";
import "./Itembox.css";

const Itembox = props => (

    <div className="item-card card rounded border-0">
        <div className="img-container">
            <a href={`api/item/${props.id}`}>
                <img className="card-img-top user-img" src={props.image} alt="Item Image" />
            </a>
        </div>

        <div className="card-body rounded-bottom">
            <h5 className="card-title">{props.itemName}</h5>
            <p className="card-text">Available to Rent in {props.location}</p>
            {/* <p>Posted: {props.createdAt}</p> */}
        </div>
    </div>
)

export default Itembox; 
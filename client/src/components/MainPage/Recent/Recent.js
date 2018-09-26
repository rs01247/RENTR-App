import React from 'react';
import "./Recent.css"

const Recent = props => (
    <div className="jumbotron bg-transparent p-0">
        <h1 id="item-avail" className="display-4">Recent Items Available</h1>
        {props.children}
    </div>
)

export default Recent;
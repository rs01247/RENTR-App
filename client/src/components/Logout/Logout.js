import React, { Component } from "react";
import "./Logout.css"

class Logout extends Component {
   
   
    onClick = e => {
        e.preventDefault();
        window.location.assign("/login")
    }

    render(){
        return(
            <div>
                <button type="click" onClick={this.onClick}  id ="logoutButton">Logout</button>
            </div>
        
        )
    }
}

export default Logout;
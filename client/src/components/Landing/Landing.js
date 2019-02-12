import React from "react";
import "./Landing.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)


const Landing = () => {
    return (
        <div className="landing-box container-fluid">
            <div id="landing-div" className="jumbotron bg-transparent rounded-0">
                <h1 id="landing-title">R E N T R</h1>
                <div className="text-center">
                    <a href="/login" className="top-button btn-lg m-1 btn btn-primary">Login</a>
                    <a href="/register" className="top-button btn-lg m-1 btn btn-primary">Register</a>
                </div>
            </div>
        </div>
    )

}

export default Landing;
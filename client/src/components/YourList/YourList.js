import React, {Component} from "react";
import axios from "../../helpers/authenticated.axios";
import "./YourList.css"

class YourList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }
}
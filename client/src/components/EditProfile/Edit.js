import React, { Component } from "react";
import "./Edit.css";
import axios from "../../helpers/authenticated.axios"

class Edit extends Component {
    constructor(props){
        super(props)
    }

    state = {
        firstName: "",
        lastName: "",
        location: "",
        Email: "",
        phoneNumber: ""

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    grabData() {
        axios.get("api/user")
            .then((res) => {
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    location: res.data.location,
                    Email: res.data.Email,
                    phoneNumber: res.data.phoneNumber
                })
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }


   



    //put only when submit is run  
    //axios.put 

    componentDidMount(){
        this.grabData
    }


   

    render() {
        return (
            <div>
                   <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                              <h1>{this.state.firstName}</h1>
                        </div>

                     
                        </div>

                    </div>
                </div>



             







                 





        )
    }
}



export default Edit;


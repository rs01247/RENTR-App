import React, { Component } from 'react';
import './Chat.css';
import authHelpers from "../../helpers/auth.helpers";
import firebase from "./firebase.js";

class Chat extends Component {
  
  constructor(props) {
    const token = authHelpers.getToken();
    const payload = authHelpers.parseToken(token)

    super(props);
    this.state = {
      chatName: payload.email,
      chatMsg: "",
      messages: [],
      id: props.id
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const chatObj = {
      msg: this.state.chatMsg,
      id: 2,
      userName: this.state.chatName,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    }
    firebase.database().ref().push(chatObj);
    this.setState({chatMsg: ""})
  }

  toFormattedDate = timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleDateString()
  }

  formatMessages = () => {
    return this.state.messages.map(msg => {
      return <p>{msg.userName}: {msg.msg} <small>{this.toFormattedDate(msg.createdAt)}</small></p>
    })
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    console.log(this.state.id)
    return (
      <div>
        <div>
          <input placeholder="User Name..." 
            name="chatName"
            value={this.state.chatName}
            // onChange={this.onChange} 
            />
        </div>
        <div>
          {this.formatMessages()}
        </div>
        <div>
          <form>
            <input placeholder="Chat Here..."
              name="chatMsg"
              value={this.state.chatMsg}
              onChange={this.onChange} />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
  
  componentDidMount() {
    firebase.database().ref().on("value", (snapshot) => {
      const messages = snapshot.val();
      const messageArr = [];
      for (const key in messages) {
        messageArr.push(messages[key]);
      }
      console.log(messageArr);
      this.setState({ messages: messageArr });
    })
  }
}

export default Chat;
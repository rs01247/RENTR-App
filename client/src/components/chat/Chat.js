import React, { Component } from 'react';
import './Chat.css';
import firebase from "./firebase.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      chatName: "user",
      chatMsg: "",
      messages: []
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
    return (
      <div>
        <div>
          <input placeholder = "User Name..." 
          name = "chatName" 
          value = {this.state.chatName} 
          onChange={this.onChange}/>
        </div>
        <div>
          {this.formatMessages()}
        </div>
        <div>
          <form>
            <input placeholder = "Chat Here..." 
            name = "chatMsg" 
            value = {this.state.chatMsg} 
            onChange={this.onChange}/>
            <button onClick = {this.onSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
  componentDidMount() {
    firebase.database().ref().on("value", (snapshot) => {
        const messages = snapshot.val();
        const messageArr = [];
        for(const key in messages) {
          messageArr.push(messages[key]);
        }
        console.log(messageArr);
        this.setState({messages: messageArr});
    })
  }
}

export default App;
import socketIOClient from "socket.io-client";
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }

  componentDidMount() {
    const {endpoint} = this.state;
    //Very simply connect to the socket
    const socket = socketIOClient(endpoint);
    socket.on("outgoing data", data =>  {
      console.log('received ::: ', data)
      this.setState({response: data.num})
    });
  }

  render() {
    const {response} = this.state;
    return (
      <div style={{textAlign: "center"}}>
       {response}
      </div>
    )
  }
}

export default App;
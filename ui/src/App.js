import socketIOClient from "socket.io-client";
import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { MessageList } from './MessageList';
import { Button } from 'antd';
import './App.css';

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
   

    this.state = {
      name: cookies.get('name') || '',
      response: false,
      endpoint: "http://127.0.0.1:4001",
      activity: {
        user:'',
        message: ''
      }
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage() {
    const { cookies } = this.props;
    this.setState({
      activity: {
        user: cookies.get('name'),
        message: document.getElementById('message').value
      }
    })
  }

  handleNameChange() {
    const name  = document.getElementById('userName').value;
    console.log('name', name)
    const { cookies } = this.props;
 
    cookies.set('name', name, { path: '/' });
    this.setState({ name });
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
    const {response, name} = this.state;
    return (
      <div style={{textAlign: "center"}}>
          <Button type="primary">Button</Button>
       {response}
       { 
        this.state.name 
        ? <React.Fragment>
              <MessageList newActivity={this.state.activity}/>
              <b>{this.state.name} </b>:  &nbsp;
              <input type="text" id="message" /> &nbsp;
              <input type="button" value="send" onClick={this.sendMessage} />
          </React.Fragment>
        : <p> 
            <input type="text" value={this.state.value} id="userName" placeholder="Enter your name" />
            <input type="submit" value="Submit" onClick={this.handleNameChange}  /> 
          </p>
        }
      </div>
    )
  }
}

export default withCookies(App);

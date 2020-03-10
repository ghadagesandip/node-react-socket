import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMessages } from './../store/actions';

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadMessages: dispatch(loadMessages())
    };
}

class MessageList extends Component {

    componentDidMount() {
        //this.loadMessages();
    }

    render() {
        console.log('this.state.messages', this.props.messages)
        const messageItems = this.props.messages 
        ? this.props.messages.map((message) => <li key={message.message}>{message.user} : {message.message}</li>) 
        : <li> No messages</li>;

        return (
            <div>
                Message List
               <ul> {messageItems} </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(MessageList);
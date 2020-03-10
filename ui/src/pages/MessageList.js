import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMessages } from './../store/actions';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadMessages:loadMessages
    }, dispatch)
}

class MessageList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadMessages()
    }
   
    render() {
        
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
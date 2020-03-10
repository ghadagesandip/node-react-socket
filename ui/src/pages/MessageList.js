import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMessages } from './../store/actions';
import { bindActionCreators } from 'redux';
import ChatMessage from './../components/ChatMessage';

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
        ? this.props.messages.map((message) => 
            <ChatMessage key={message.message} message={message} />
        ) 
        : <div> No messages</div>;

        return (
            <div>
               <div> {messageItems} </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(MessageList);
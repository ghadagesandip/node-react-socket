import React, { Component } from 'react';

export class MessageList extends Component {

    constructor(prop) {
        super(prop);
        
        this.state = {
            messages: [
                { user: 'sandip', message: 'hello'},
                { user: 'santosh', message: 'hey'}
            ]
        }
    };

    static getDerivedStateFromProps(prop, state) {

        return {
            messages: state.messages.concat([prop.newActivity])
        }
    }

    render() {
            const listItems = this.state.messages.map((message) =>
            <li key={message.message}>{message.user} : {message.message}</li>
            );
        return (
            <ul>
             {listItems}
            </ul>
        )
    }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class MessageList extends Component {
    render() {
        return (
            <div>
                Message List 
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(MessageList);
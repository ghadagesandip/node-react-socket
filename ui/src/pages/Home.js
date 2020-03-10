import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: 'sandip'
        }
    }

    render() {
        return (
            <div>
               Hello {this.state.user} 
            </div>
        );
    }
}
export default Home;
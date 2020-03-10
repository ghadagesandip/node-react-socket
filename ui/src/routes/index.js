import React from 'react';
import Home from './../pages/Home';
import MessageList from './../pages/MessageList'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

export function Routes () {
    return (
        <Router>
            <Switch>
                <Route exact path="/messages" component={MessageList}></Route>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </Router>
    )
}
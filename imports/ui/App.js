import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import Nav from "./Nav";
import {Events} from "../api/events";
// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Nav currentUser = {this.props.currentUser} eventsList ={this.props.eventsList}/>
            </div>);
    }
}

export default withTracker(() => {
    return {
        eventsList: Events.find({}).fetch(),
        currentUser: Meteor.user()
    };
})(App);

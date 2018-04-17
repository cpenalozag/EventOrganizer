import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import Nav from "./Nav";
import {Events} from "../api/events";
import Foot from "./Foot.jsx";
import {userEventsList} from "../api/userEventsList";
import {Meteor} from "meteor/meteor";
import {HostEvents} from "../api/hostEvents";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
// App component - represents the whole app

const NUM_RECORDS = 12;
const startAt = new Date();
const pageNumber = new ReactiveVar(1);

class App extends Component {
    constructor(props) {
        super(props);
    }

    loadMore () {
        pageNumber.set(pageNumber.get() + 1);
    }
    render() {
        return (
            <div>
                <Nav currentUser = {this.props.currentUser} eventsList ={this.props.eventsList} loadMore={this.loadMore.bind(this)}
                     userEvents={this.props.userEvents} hostEvents={this.props.hostEvents}/>
                <Alert stack={{limit: 3}} />
                <Foot/>
            </div>

        );
    }
}

export default withTracker(() => {
    Meteor.subscribe("Events", NUM_RECORDS * pageNumber.get(), startAt);
    Meteor.subscribe("ListEvents", Meteor.userId());
    Meteor.subscribe("HostEvents", Meteor.userId());
    return {
        eventsList: Events.find({}).fetch(),
        currentUser: Meteor.user(),
        userEvents: userEventsList.find({}).fetch(),
        hostEvents: HostEvents.find({}).fetch(),
    };
})(App);

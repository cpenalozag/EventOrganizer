import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import Nav from "./Nav";
import {Events} from "../api/events";
import Foot from "./Foot.js";
// App component - represents the whole app

const NUM_RECORDS = 3;
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
                <Nav currentUser = {this.props.currentUser} eventsList ={this.props.eventsList} loadMore={this.loadMore.bind(this)} />
                <Foot/>
            </div>

        );
    }
}

export default withTracker((props) => {
    Meteor.subscribe("Events", NUM_RECORDS * pageNumber.get(), startAt);
    return {
        eventsList: Events.find({}).fetch(),
        currentUser: Meteor.user()
    };
})(App);

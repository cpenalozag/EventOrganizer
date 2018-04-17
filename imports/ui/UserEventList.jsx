/*Camilo Zambrano: Try to organize your imports showing the defaults first, and then the other imports
here I organized them in that way*/
import React, {Component} from 'react';
import Event from './Event.jsx';
import EventList from "./EventList.jsx";

import {withTracker} from 'meteor/react-meteor-data';
import {userEventsList} from "../api/userEventsList";
import {HostEvents} from "../api/hostEvents";
import {Redirect, Route} from "react-router-dom";
import {Meteor} from "meteor/meteor";

// App component - represents the whole app
class UserEventList extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            search: "",
            filterDate: false,
            eventsBool: true
        };
    }

    updateSearch(evt) {
        this.setState({search: evt.target.value.substr(0, 20)});
    }


    renderEvents() {
        let events = this.props.userEvents;
        const filteredEvents = events.filter(
            (event) => {
                return event.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            });
        return filteredEvents.map((event) => (
            <Event key={event._id} event={event}/>
        ));
    }

    renderHostedEvents() {
        let events = this.props.hostEvents;
        const filteredEvents = events.filter(
            (event) => {
                return event.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            });
        return filteredEvents.map((event) => (
            <Event key={event._id} event={event}/>
        ));
    }

    redirectEvents() {
        this.setState({eventsBool: false});
    }

    render() {

        if (!this.state.eventsBool) {
            return (
                <Redirect to="/events"/>
            )
        }
        return (
            <div>
                {this.props.currentUser ?
                    <div className="blog-2 section section-gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 ml-auto mr-auto">
                                    <h2 className="title">My Events</h2>

                                    {this.props.userEvents ?
                                        <div>
                                            <h5 className="subtittle">Your upcoming events</h5>
                                            <br/>
                                            <div className="input-group">
                                                <input type="text" className="form-control border-input sb"
                                                       placeholder="Try: Torneo cachito uniandes"
                                                       value={this.state.search}
                                                       onChange={this.updateSearch.bind(this)}/>
                                            </div>
                                            <hr/>
                                            <br/>
                                            <h3>Events you host</h3>
                                            <div className="row">
                                                {this.renderHostedEvents()}
                                            </div>
                                            <hr/>
                                            <h3>Events in which you participate</h3>
                                            <div className="row">
                                                {this.renderEvents()}
                                            </div>
                                        </div> :
                                        <div>
                                            <p>
                                                It seems like you don't have any events {Meteor.user().username}. Go to
                                                events and
                                                join one now!
                                            </p>
                                            <br/>
                                            <div className="ml-auto mr-auto">
                                                <button onClick={this.redirectEvents.bind(this)}
                                                        className="btn btn-danger btn-lg">
                                                    Join event! <i className="fa fa-search"/>
                                                </button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div> : <Redirect to="/"/>}
                <Route exact path="/events" render={() => <EventList eventsList={this.props.eventsList}/>}/>
            </div>
        );
    }
}

/*Camilo Zambrano: Maybe this doesn't apply when you have routing on React. But from what I understand
you shouldn't add the withtracker to a child component, only to the parent of all the application or
components that won't receive props. If you use the withtracker in the way you are doing here there could
be some problems or conflicts between react and meteor on the props of your components*/
export default withTracker(() => {
    Meteor.subscribe("ListEvents", Meteor.userId());
    Meteor.subscribe("HostEvents", Meteor.userId());
    return {
        userEvents: userEventsList.find({}).fetch(),
        hostEvents: HostEvents.find({}).fetch()
    };
})(UserEventList);



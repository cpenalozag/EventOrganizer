import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withTracker} from 'meteor/react-meteor-data';

import {Events} from '../api/events.js';
import Event from './Event.js';
import DatePicker from './DatePicker.js';
import {userEventsList} from "../api/userEventsList";
import {Redirect, Route} from "react-router-dom";
import EventList from "./EventList.js";

// App component - represents the whole app
class UserEventList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            filterDate: false,
            eventsBool: true
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Events.insert({
            text,
            createdAt: new Date(), // current time
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    updateSearch(evt) {
        this.setState({search: evt.target.value.substr(0, 20)});
    }

    filterDate() {
        this.setState({
            filterDate: !this.state.filterDate,
        });
    }

    printDate() {
        console.log(this.props);
    }

    renderEvents() {
        let idEvents = this.props.userEvents._ListEventsId;

        let filtered = [];
        console.log(this.props);
        for (let i = 0; i < idEvents.length; i++) {
            filtered.push(this.props.eventsList.filter((event) => {
                return event._id.equals(idEvents[i]);
            }));
        }
        console.log(filtered);

        const filteredEvents = filtered.filter(
            (event) => {
                console.log(event);
                return event[0].name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            });
        return filteredEvents ? filteredEvents.map((event) => (
            <Event key={event[0]._id} event={event[0]}/>
        )) : "";
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
                                    <h2 className="title">Tamo Ledy Pal Paly</h2>

                                    {this.props.userEvents ?
                                        <div>
                                            <h3 className="subtittle">Your Events</h3>
                                            <br/>
                                            <div className="input-group">
                                                <input type="text" className="form-control search-query"
                                                       placeholder="Try: Torneo cachito uniandes"
                                                       value={this.state.search}
                                                       onChange={this.updateSearch.bind(this)}/>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-3">
                                                    <button onClick={this.filterDate.bind(this)}>
                                                        Filter by date
                                                    </button>
                                                </div>
                                            </div>
                                            {this.state.filterDate && <div className="row">
                                                <DatePicker/>
                                                <button onClick={this.printDate.bind(this)}>Search</button>
                                            </div>}
                                            <br/>
                                            <br/>
                                            <div className="row">
                                                {this.renderEvents()}
                                            </div>
                                        </div> :
                                        <div>
                                            <h3>
                                                Wow!! {Meteor.user().username} you don't have events. Go to events and
                                                join one now.
                                            </h3>
                                            <br/>
                                            <div className="ml-auto mr-auto">
                                                <button onClick={this.redirectEvents.bind(this)}
                                                        className="btn btn-danger btn-lg">
                                                    Join event! <i className="fa fa-search"></i>
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

export default withTracker(() => {
    const userEvents = Meteor.userId() ? userEventsList.find({_idUser: Meteor.userId()}).fetch()[0] : {};
    return {
        userEvents,
    };
})(UserEventList);



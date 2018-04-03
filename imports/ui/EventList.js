import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withTracker} from 'meteor/react-meteor-data';

import {Events} from '../api/events.js';
import Event from './Event.js';
import DatePicker from './DatePicker.js';
import {userEventsList} from "../api/userEventsList";

// App component - represents the whole app
class EventList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            filterDate: false
        };
    }

    updateSearch(evt) {
        this.setState({search: evt.target.value.substr(0, 20)});
    }

    renderEvents() {
        const filteredEvents = this.props.eventsList.filter(
            (event) => {
                return event.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            });
        return filteredEvents.map((event) => (
            <Event key={event._id} event={event}/>
        ));
    }

    render() {
        return (
            <div className="blog-2 section section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 ml-auto mr-auto">
                            <h2 className="title">Search upcoming events here</h2>
                            <br/>
                            <div className="input-group">
                                <input type="text" className="form-control border-input"
                                       placeholder="Try: Torneo cacho uniandes"
                                       value={this.state.search}
                                       onChange={this.updateSearch.bind(this)}/>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div className="row">
                                {this.renderEvents()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default EventList;
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

    filterDate() {
        this.setState({
            filterDate: !this.state.filterDate,
        });
    }

    printDate(){
        console.log(this.props);
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
                            <h2 className="title">Search events here</h2>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default EventList;
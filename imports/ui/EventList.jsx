import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import ReactTransitionGroup from "react-addons-css-transition-group"
import Event from './Event.jsx';

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
                            <h2 className="title">Browse upcoming events</h2>
                            <div className="input-group">
                                <input type="text" className="form-control border-input sb"
                                       placeholder="Try: Torneo cacho uniandes"
                                       value={this.state.search}
                                       onChange={this.updateSearch.bind(this)}/>
                            </div>
                            <hr/>
                            <br/>
                            <ReactTransitionGroup component="div" className="row"
                            transitionName="events" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                                {this.renderEvents()}
                            </ReactTransitionGroup>
                            <div className="buttons centered">
                                <button onClick={this.props.loadMore} className="btn btn-danger btn-lg">
                                    Show More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default EventList;
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withTracker} from 'meteor/react-meteor-data';

import {Events} from '../api/events.js';
import Event from './Event.js';

// App component - represents the whole app
class EventList extends Component {

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

    renderEvents() {
        return this.props.events.map((event) => (
            <Event key={event._id} event={event}/>
        ));
    }

    render() {
        return (
                <div className="blog-2 section section-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 ml-auto mr-auto">
                                <h2 className="title">Latest Blogposts 2</h2>
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

export default withTracker(() => {
    return {
        events: Events.find({}, {sort: {createdAt: -1}}).fetch(),
    };
})(EventList);


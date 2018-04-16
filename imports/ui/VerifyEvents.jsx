import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {EventsAdmin} from "../api/eventsAdmin";
import {Meteor} from "meteor/meteor";
import Event from './Event.jsx';


class VerifyEvents extends Component {
    constructor(props) {
        super(props);
    }

    renderEvents() {
        return this.props.eventsAdmin.map((event) => (
            <Event key={event._id} event={event} admin={true}/>
        ));
    }


    render() {
        return (
            <div className="blog-2 section section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 ml-auto mr-auto">
                            <h2 className="title">Verify new events</h2>
                            <hr/>
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
    Meteor.subscribe("EventsAdmin", Meteor.userId());
    return {
        eventsAdmin: EventsAdmin.find({}).fetch()
    };
})(VerifyEvents);
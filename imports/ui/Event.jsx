import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Meteor} from "meteor/meteor";

// Event component - represents a single event
export default class Event extends Component {

    deleteEvent() {
        Meteor.call("eventsAdmin.remove", this.props.event._id);
        Meteor.call("hostEvents.remove", this.props.event._id);
    }

    addEvent() {
        const id = this.props.event._id;
        const name = this.props.event.name;
        const date = this.props.event.date;
        const location = this.props.event.location;
        const category = this.props.event.category;
        const description = this.props.event.description;
        const type = this.props.event.type;
        console.log(type);
        Meteor.call("events.insert", id, name, date, location, category, description, type);
        Meteor.call("eventsAdmin.remove", this.props.event._id);
    }

    render() {
        console.log(this.props);
        return (
            <div className="col-md-4">
                {
                    this.props.admin ?
                        <div className="card-fixed card-blog event">
                            <div className="card-body">
                                <h6 className="redT"><strong>{this.props.event.category}</strong></h6>
                                <h5 className="card-title">
                                    {this.props.event.name}
                                </h5>
                                <p className="card-description">
                                    {this.props.event.description.substring(0, 100) + "..."} <br/>
                                </p>
                                <div className="author text-center">
                                    <i className="fa fa-calendar redT"/>
                                    <span> {this.props.event.date}</span>
                                </div>
                                <hr/>
                                <div className="card-footer text-center">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="icon">
                                                <a onClick={this.addEvent.bind(this)}>
                                                    <i className="fa fa-check-circle verify-event-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="icon">
                                                <a onClick={this.deleteEvent.bind(this)}>
                                                    <i className="fa fa-times-circle delete-event-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <Link to={{pathname: `/events/${this.props.event._id}`, state: {event: this.props.event, showAdd:this.props.show}}}>
                            <div className="card card-blog event">
                                <div className="card-body">
                                    <h6 className="redT"><strong>{this.props.event.category}</strong></h6>
                                    <h5 className="card-title">
                                        {this.props.event.name}
                                    </h5>
                                    <p className="card-description">
                                        {this.props.event.description.substring(0, 100) + "..."} <br/>
                                    </p>
                                    <hr/>
                                    <div className="card-footer text-center">
                                        <div className="author">
                                            <i className="fa fa-calendar redT"/>
                                            <span> {this.props.event.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                }

                <br/>
            </div>
        );
    }
}


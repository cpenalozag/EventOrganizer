import React, {Component} from 'react';
import CommentList from "./CommentList";
import ItemList from "./ItemList";
import {userEventsList} from "../api/userEventsList";
import {withTracker} from 'meteor/react-meteor-data';
import {Items} from "../api/items.js";


// EventDetail component - represents the detail of a single event
class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: props.location.event
        };
    }


    render() {
        return (

            <div className="blog-2 section section-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 ml-auto mr-auto">
                            <div className="row">
                                <div className="col-md-5 ">
                                    <div className="fixed">
                                        <Detail event={this.state.event}/>
                                    </div>
                                </div>
                                <div className="col-md-7 scrollit">
                                    <ItemList items={this.props.items} eventId={this.state.event._id}/>
                                    <hr/>
                                    <CommentList id={this.state.event._id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Detail extends Component {

    render() {
        return (
            <div className="text-center title">
                <h2>{this.props.event.name}</h2>
                <h3 className="title-uppercase">
                    <small>{this.props.event.location}</small>
                </h3>
                <div className="text-center">
                    <h6 className="title-uppercase">{this.props.event.date}</h6>
                    <p align="justify">{this.props.event.description}</p>
                </div>
            </div>
        );
    }
}

//export default EventDetail;

export default withTracker((props) => {
    Meteor.subscribe("items");
    return {
        items: Items.find({idEvent: props.location.event._id}).fetch(),
    };
})(EventDetail);
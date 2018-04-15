import React, {Component} from 'react';
import CommentList from "./CommentList";
import ItemList from "./ItemList";
import {withTracker} from 'meteor/react-meteor-data';
import {Items} from "../api/items.js";
import {Comments} from "../api/comments";
import {Meteor} from "meteor/meteor";
import {userEventsList} from "../api/userEventsList";


// EventDetail component - represents the detail of a single event
class EventDetail extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            showAdd: true,
        }
    }

    addEvent() {
        const newEvent = {
            _id: this.props.location.state.event._id,
            idUser: Meteor.userId(),
            name: this.props.location.state.event.name,
            date: this.props.location.state.event.date,
            location: this.props.location.state.event.location,
            category: this.props.location.state.event.category,
            description: this.props.location.state.event.description,
        }
        Meteor.call('listEvents.insert', newEvent);

        this.setState({showAdd: false});
        window.alert("Now you are part of the event!");
    }

    partOfEvent() {
        const contains = this.props.userEvents.filter((event)=>{
          return event._id ===  this.props.location.state.event._id;
        })
        if (contains.length>0){
            return true;
        }
        return false;
    }

    render() {
        return (

            <div className="blog-2 section section-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 ml-auto mr-auto">
                            <div className="row">
                                <div className="col-md-5 col-sm-12">
                                    <div className="fixed">
                                        <Detail event={this.props.location.state.event}/>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <ItemList items={this.props.items} eventId={this.props.location.state.event._id}/>
                                    <hr/>
                                    <CommentList comments={this.props.comments}
                                                 id={this.props.location.state.event._id}/>
                                    <hr/>
                                    {Meteor.userId() && this.state.showAdd && !this.partOfEvent() ? <div className="buttons">
                                        <div className="centered">
                                            <button onClick={this.addEvent.bind(this)}
                                                    className="btn btn-danger btn-lg">
                                                Add to my events <i className="fa fa-search"/>
                                            </button>
                                        </div>
                                    </div> : ""}
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
            <div className="text-center title card-title">
                <h2 className="no-margin">{this.props.event.name}</h2>
                <h3 className="title-uppercase">
                    <small>{this.props.event.location}</small>
                </h3>
                <div className="text-center">
                    <h6 className="title-uppercase">{this.props.event.date}</h6>
                    <hr/>
                    <p align="justify">{this.props.event.description}</p>
                </div>
            </div>
        );
    }
}

//export default EventDetail;

export default withTracker((props) => {
    Meteor.subscribe("items");
    Meteor.subscribe('Comments');
    Meteor.subscribe("ListEvents", Meteor.userId());
    return {
        items: Items.find({idEvent: props.match.params.eventId}).fetch(),
        comments: Comments.find({idEvent: props.match.params.eventId}, {sort: {createdAt: -1}}).fetch(),
        userEvents: userEventsList.find({}).fetch(),
    };
})(EventDetail);
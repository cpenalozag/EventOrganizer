import React, {Component} from 'react';
import CommentList from "./CommentList";
import ItemList from "./ItemList";
import {userEventsList} from "../api/userEventsList";
import {withTracker} from 'meteor/react-meteor-data';
import {Items} from "../api/items.js";
import {Comments} from "../api/comments";


// EventDetail component - represents the detail of a single event
class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddEvent: true
        };
    }

    addEvent() {

        if (this.props.userEvents === undefined) {
            userEventsList.insert({
                _idUser: Meteor.userId(),
                _ListEventsId: [
                    this.props.location.state.event._id._str
                ]
            })
        }
        else {
            const userEv = this.props.userEvents._ListEventsId;
            const exists = userEv.filter((ev) => {
                return ev === this.props.location.state.event._id;
            })
            if (!exists.length > 0) {
                userEv.push(this.props.location.state.event._id);
                const newEv = {
                    _idUser: Meteor.userId(),
                    _ListEventsId: userEv
                }
                res = userEventsList.update({_id: this.props.userEvents._id},
                    {
                        _idUser: Meteor.userId(),
                        _ListEventsId: userEv
                    },
                    {upsert: true}
                )

                this.setState({showAddEvent: false});
            }
            else
                this.setState({showAddEvent: false});
            window.alert("Now you are part of the event");
        }


    }

    exist() {

        this.setState({showAddEvent: false});
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
                                    {Meteor.userId() && this.state.showAddEvent ? <div className="buttons">
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
    Meteor.subscribe('Comments');
    const userEvents = Meteor.userId() ? userEventsList.find({_idUser: Meteor.userId()}).fetch()[0] : {};
    return {
        items: Items.find({idEvent: props.match.params.eventId}).fetch(),
        comments: Comments.find({}, {sort: {createdAt: -1}}).fetch(),
        userEvents,
    };
})(EventDetail);
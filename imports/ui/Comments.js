import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import {Route} from "react-router-dom";
import EventList from "./EventList.js";

// Comments component
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {
                    "_id":"1",
                    "userName":"James",
                    "userPic":"...",
                    "date":"Sep 11, 11:54 AM",
                    "text":"Ho oo oo la"
                },
                {
                    "_id":"2",
                    "userName":"Rada",
                    "userPic":"...",
                    "date":"Sep 11, 11:59 AM",
                    "text":"Grr"
                },
                {
                    "_id":"3",
                    "userName":"Yerry",
                    "userPic":"...",
                    "date":"Sep 11, 12:13 PM",
                    "text":"jojo"
                }
            ]
        }
    }

    renderComments() {
        return this.state.comments.map((comment) => (
            <Comment key={comment._id} comment={comment}/>
        ));
    }
    
    render() {
        return (
                <div className="comments media-area">
                    <h2 className="text-center title">Comments</h2>
                {this.renderComments()}
                </div>
        );
    }
}

export default Comments;

class Comment extends Component {

    render() {
        return (
                <div className="media">
                    <a className="pull-left" href="#paper-kit">
                        <div className="avatar">
                            <img className="media-object" alt={this.props.comment.userName + " picture"} src={this.props.comment.userPic}/>
                        </div>
                    </a>
                    <div className="media-body">
                        <h5 className="media-heading">{this.props.comment.userName}</h5>
                        <div className="pull-right">
                            <h6 className="text-muted">{this.props.comment.date}</h6>
                            <a href="#paper-kit" className="btn btn-info btn-link pull-right "> <i className="fa fa-reply"></i> Reply</a>
                        </div>
                        <p>{this.props.comment.text}</p>
                    </div>
                </div>
        );
    }
}
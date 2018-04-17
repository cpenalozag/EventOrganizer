import React, {Component} from "react";
import ReactDOM from "react-dom";
import {withTracker} from "meteor/react-meteor-data";

// Notifications component
class Notifications extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Meteor.call("Comments.insert", text, this.props.id);
        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = "";

    }

    renderComments() {
        return this.props.comments.map((comment) => (
            <Comment key={comment._id} comment={comment}/>
        ));
    }

    render() {
        return (
            <div className="section">
                <div className="comments media-area">
                    <h2 className="text-center title">Notifications</h2>
                    <p className="text-center">Coming soon...</p>

                </div>
            </div>
        );
    }
}

export default Notifications;

class Notification extends Component {
    render() {
        return (
            <div className="media">
                <div className="media-body">

                    <div>
                        <h5 className="media-heading">{this.props.comment.username}
                            <span className="pull-right text-muted">
                            {this.props.comment.createdAt.toDateString() + " " + (this.props.comment.createdAt.getHours() < 10 ? "0" : "") +
                            this.props.comment.createdAt.getHours() + ":" + (this.props.comment.createdAt.getMinutes() < 10 ? "0" : "") +
                            this.props.comment.createdAt.getMinutes() + ":" + (this.props.comment.createdAt.getSeconds() < 10 ? "0" : "") +
                            this.props.comment.createdAt.getSeconds()}
                        </span>
                        </h5>
                    </div>
                    <p>{this.props.comment.text}</p>
                </div>
            </div>
        );
    }
}
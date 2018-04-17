import React, {Component} from "react";
import ReactDOM from "react-dom";
import {withTracker} from "meteor/react-meteor-data";

// Participant list component
class ParticipantList extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Meteor.call("Participants.insert", this.props.id, text);
        Meteor.call("Notifications.insert","invitation", this.props.id, text);
        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = "";

    }

    renderParticipants() {
        return this.props.participants.map((participant) => (
            <Participant key={participant._id} participant={participant}/>
        ));
    }

    render() {
        return (
            <div className="comments media-area">
                <h2 className="text-center title">Invited Users</h2>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
                        <input className="form-control border-input" type="text" ref="textInput"
                               placeholder="Type your friend's email to invite them"/>
                </form>
                {this.renderParticipants()}
            </div>
        );
    }
}

export default ParticipantList;

class Participant extends Component {
    render() {
        return (
            <div className="media">
                <div className="media-body">

                    <div>
                        <h5 className="media-heading">{this.props.participant.username}
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}
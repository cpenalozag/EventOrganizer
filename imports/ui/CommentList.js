import React, {Component} from 'react';
import {Comments} from "../api/comments";
import ReactDOM from 'react-dom';
import {withTracker} from 'meteor/react-meteor-data';

// Comments component
class CommentList extends Component {
    constructor(props){
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Comments.insert({
            text,
            createdAt: new Date(),
            eventId: this.props.id
        });
        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';

    }

    renderComments() {
        return this.props.comments.filter(comment=>comment.eventId===this.props.id).map((comment) => (
            <Comment key={comment._id} comment={comment}/>
        ));
    }

    render() {
        return (
            <div className="comments media-area">
                <h2 className="text-center title">Comments</h2>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form-control border-input"
                           type="text"
                           ref="textInput"
                           placeholder="Type to add a new comment"
                    />
                </form>
                {this.renderComments()}
            </div>
        );
    }
}
export default withTracker(() => {
    return {
        comments: Comments.find({}).fetch()
    };
})(CommentList);

class Comment extends Component {
    render() {
        return (
            <div className="media">
                <div className="media-body">
                    <h5 className="media-heading">username</h5>
                    <div className="pull-right">
                        <h6 className="text-muted">
                            {this.props.comment.createdAt.toDateString()}
                        </h6>
                    </div>
                    <p>{this.props.comment.text}</p>
                </div>
            </div>
        );
    }
}
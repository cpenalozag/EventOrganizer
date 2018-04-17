import React, {Component} from "react";
import {withTracker} from "meteor/react-meteor-data";

// Notifications component
class Notifications extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    renderNotifications() {
        return this.props.notifications.map((notification) => (
            <Notification key={notification._id} notification={notification}/>
        ));
    }

    render() {
        return (
            <div className="section">
                <div className="comments media-area">
                    <h2 className="text-center title">Notifications</h2>
                    {this.renderNotifications()}
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
                        <h5 className="media-heading">{this.props.notification}
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}
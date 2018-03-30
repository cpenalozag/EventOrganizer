import React, {Component} from 'react';


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
            <div className="container">
                <h1></h1>
            </div>
        )
    }
}

export default EventDetail;
import React, {Component} from 'react';
import Comments from "./Comments";


// EventDetail component - represents the detail of a single event
class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: props.location.event
        };
        console.log(this.state.event);
    }

    render() {
        return (

            <div className="blog-2 section section-gray">
                <div className="container">
                    <Detail event={this.state.event}/>
                    <div className="row">
                        <div className="col-md-10 ml-auto mr-auto">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <Comments/>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h2 className="text-center title">Items</h2>
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
            <div className="row">
                <div className="col-md-10 ml-auto mr-auto text-center title">
                    <h2>{this.props.event.name}</h2>
                    <h3 className="title-uppercase">
                        <small>{this.props.event.location}</small>
                    </h3>
                    <div className="text-center">
                        <h6 className="title-uppercase">{this.props.event.date}</h6>
                        <p align="justify">{this.props.event.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventDetail;
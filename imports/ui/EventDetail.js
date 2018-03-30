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
                <Detail/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 ml-auto mr-auto">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <Comments/>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <h1>,</h1>
                                    </div>
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
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ml-auto mr-auto text-center title">
                        <h2>A place for storytelling</h2>
                        <h3 className="title-uppercase">
                            <small>Written by designers for designers</small>
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 ml-auto mr-auto">
                        <div className="text-center">
                            <span className="label label-warning main-tag">Trending</span>
                            <a href="javascrip: void(0);"><h3 className="title">Make Somebody Nervous Before You
                                Die</h3></a>
                            <h6 className="title-uppercase">October 10, 2016</h6>
                        </div>
                    </div>
                    <div className="col-md-8 ml-auto mr-auto">
                        <a href="javascrip: void(0);">
                            <div className="card" data-radius="none"></div>
                            <p className="image-thumb text-center">Photo by Cam Adams</p>
                        </a>


                    </div>
                </div>

            </div>
        );
    }
}

export default EventDetail;
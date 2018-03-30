import React, {Component} from 'react';

// Event component - represents a single event
export default class Event extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="col-md-4">
                <a className="card-link" href="">
                    <div className="card card-blog">

                        <div className="card-image">
                            <img className="img img-raised"
                                 src={this.props.event.image_url} alt={"Image for event: "+this.props.event.name}/>
                        </div>
                        <div className="card-body">
                            <h6 className="redT"><strong>{this.props.event.category}</strong></h6>
                            <h5 className="card-title">
                                {this.props.event.name}
                            </h5>
                            <p className="card-description">
                                {this.props.event.description.substring(0,70)+"..."} <br/>
                            </p>
                            <hr/>
                            <div className="card-footer">
                                <div className="author">
                                    <img
                                        src="https://rampages.us/alharthiaa/wp-content/uploads/sites/8487/2015/08/5249700000_5247598126_mrbean_rare_collection_xlarge_xlarge.jpeg"
                                        alt="..." className="avatar img-raised"/>
                                    <span>Mike John</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>

            </div>
        );
    }
}


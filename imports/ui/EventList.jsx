import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import ReactTransitionGroup from "react-addons-css-transition-group"
import Event from './Event.jsx';

// App component - represents the whole app
class EventList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            filterDate: false,
        };
    }

    updateSearch(evt) {
        this.setState({search: evt.target.value.substr(0, 20)});
    }

    renderEvents() {
        const filteredEvents = this.props.eventsList.filter(
            (event) => {
                return event.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            });
        return filteredEvents.map((event) => {
            const showAdd = this.partOfEvent()||this.hostOfEvent() ? true:false;
            (
                <Event key={event._id} event={event} show={showAdd}/>
            )
        });
    }

    allEvents ()
    {
        return this.props.eventsList.length % 12 == 0;
    }

    partOfEvent(eventId) {
        const contains = this.props.userEvents.filter((event)=>{
            return event._id ===  eventId;
        })
        if (contains.length>0){
            return true;
        }
        return false;
    }

    hostOfEvent(eventId) {
        const contains = this.props.hostEvents.filter((event)=>{
            return event._id ===  eventId;
        })
        if (contains.length>0){
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className="blog-2 section section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 ml-auto mr-auto">
                            <h2 className="title">Browse public events</h2>
                            <div className="input-group">
                                <input type="text" className="form-control border-input sb"
                                       placeholder="Try: Torneo cacho uniandes"
                                       value={this.state.search}
                                       onChange={this.updateSearch.bind(this)}/>
                            </div>
                            <hr/>
                            <br/>
                            <ReactTransitionGroup component="div" className="row"
                            transitionName="events" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                                {this.renderEvents()}
                            </ReactTransitionGroup>
                            {this.allEvents() ?
                                <div className="buttons centered">
                                    <button onClick={this.props.loadMore} className="btn btn-danger btn-lg">
                                        Show More
                                    </button>
                                </div>:""
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default EventList;
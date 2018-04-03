import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {Route} from "react-router-dom";
import EventList from "./EventList.js";

// Home component - represents the whole app
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goSearchEv: false
        };
    }

    goSearch() {
        this.setState({goSearchEv: true});
    }

    render() {

        if (this.state.goSearchEv) {
            return (
                <Redirect to={"/events"}/>
            );
        }
        return (
            <div className="header-2">
                <div className="page-header h-80">
                    <div className="filter"></div>
                    <div className="content-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 text-left">
                                    <h1 className="title">Event Manager</h1>
                                    <h5 align="justify">Event Manager is a meeting, event, and experience application
                                        manager.
                                        Event Manager offers web-based solutions to planners in terms of
                                        creating, items planning, comments review and more. Event Manager solutions optimize the
                                        entire event management value chain and have enabled users to manage meetings
                                        and events.</h5>
                                    <br/>
                                    <div className="buttons">
                                        <button onClick={this.goSearch.bind(this)} className="btn btn-danger btn-lg">
                                            Search Events <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-gray">
                    <div className="container">
                        <div className="row">
                            <div className="title content-center col-lg-12 col-md-12 text-center">
                                <h2>About the app</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="info">
                                    <div className="icon icon-danger">
                                        <i className="fa fa-user-plus"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Register</h4>
                                        <p className="description">Sign up now and start new experiences!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info">
                                    <div className="icon icon-danger">
                                        <i className="fa fa-plus-circle"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Add new event</h4>
                                        <p className="description">If you are log in, create your event in which friends
                                            and people can participate!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info">
                                    <div className="icon icon-danger">
                                        <i className="fa fa-search"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Search new events to participate</h4>
                                        <p>Search any existing event and join now, you can join by helping with the
                                            items list!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info">
                                    <div className="icon icon-danger">
                                        <i className="fa fa-list-ul"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">See the events that you make part</h4>
                                        <p>Use the tab "My Events" to see which upcoming events you made part.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Route exact path="/events" component={EventList}/>
            </div>
        );
    }
}

export default Home;
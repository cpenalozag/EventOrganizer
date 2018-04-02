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
                <div className="page-header">
                    <div className="filter"></div>
                    <div className="content-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 text-left">
                                    <h1 className="title">Event Manager</h1>
                                    <h5>Event Manager is a meeting, event, and experience application.
                                        Event Manager offers web-based solutions to gente del común planners in terms of creating,
                                        items planning, comments review and more. Event Manager solutions optimize the
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
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className="fa fa-calendar"/>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Plan events</h4>
                                    <p className="description">Easily manage the planning process of your event!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className="fa fa-users"/>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Make item list with your friends</h4>
                                    <p>Invite your friends to events and join your friends at their events!.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className="fa fa-flask"/>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Enjoy new experiences</h4>
                                    <p>Join public events to meet people or have fun doing different activities!</p>
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
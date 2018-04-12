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
                                    <div className="p6">
                                        <p align="justify">With Event manager you can meet new people, organize events
                                            and live new experiences. Browse events in the event tab. Sign up to join
                                            events: comment and become part of the planning process!
                                        </p>
                                    </div>

                                    <br/>
                                    <div className="buttons">
                                        <button onClick={this.goSearch.bind(this)} className="btn btn-danger btn-lg">
                                            Search Events <i className="fa fa-search"/>
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
                            <div className="subtitle content-center col-lg-12 col-md-12 text-center">
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
                                        <p className="description">Sign up now and start enjoying new experiences!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info">
                                    <div className="icon icon-danger">
                                        <i className="fa fa-plus-circle"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Add new events</h4>
                                        <p className="description">Create events and invite your friends
                                            or let other people participate!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info">
                                    <div className="icon icon-danger">
                                        <i className="fa fa-search"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Join events</h4>
                                        <p>Browse the public events and join now! You can meet others through comments
                                            and help with the item check list!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info">
                                    <div className="icon icon-danger">
                                        <i className="fa fa-list-ul"/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Browse your events</h4>
                                        <p>Check the My Events tab to see the upcoming events which you are part of</p>
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
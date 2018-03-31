import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import {Route} from "react-router-dom";
import EventList from "./EventList.js";

// Home component - represents the whole app
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            goSearchEv : false
        };
    }

    goSearch(){
        this.setState({goSearchEv:true});
    }
    render() {

        if(this.state.goSearchEv)
        {
            return(
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
                                    <h1 className="title">Eventirris</h1>
                                    <h5>Descripcíon.</h5>
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
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h2 className="title">Why our product is the best</h2>
                            <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here.</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className="fa fa-calendar"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Plan events</h4>
                                    <p className="description">Easily manage the planning process of your event.</p>
                                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className="fa fa-users"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Share with your friends</h4>
                                    <p>Invite your friends to events and join your friends at their events!.</p>
                                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className="fa fa-flask"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Enjoy new experiences</h4>
                                    <p>Join public events to meet people or have fun doing different activities!</p>
                                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
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
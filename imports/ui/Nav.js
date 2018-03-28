import React, {Component} from "react";

import {NavLink} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import EventList from "./EventList";
import Home from "./Home";

class Nav extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg fixed-top nav-down">
                        <div className="container">
                            <div className="navbar-translate">
                                <div className="navbar-header">
                                    <a className="navbar-brand">Eventirris</a>
                                </div>
                                <button className="navbar-toggler navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-bar"></span>
                                    <span className="navbar-toggler-bar"></span>
                                    <span className="navbar-toggler-bar"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" to="/events">Events</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="btn btn-danger" href="#">
                                            <i className="nc-icon nc-cart-simple"></i> Log In
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <br/>
                    <Route exact path="/events" component={EventList}/>
                    <Route exact path="/" component={Home}/>
                </div>
            </Router>

        );
    }
}
export default Nav;
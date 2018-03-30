import React, {Component} from "react";
import AccountsUIWrapper from './AccountsUIWrapper.js';
import {NavLink} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import EventList from "./EventList";
import AddEvent from "./AddEvent";
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
                                        <NavLink exact className="nav-link" to="/new">Create event</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item"><AccountsUIWrapper/></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <br/>
                    <Route exact path="/events" component={EventList}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/new" component={AddEvent}/>
                </div>
            </Router>

        );
    }
}
export default Nav;
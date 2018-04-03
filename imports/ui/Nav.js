import React, {Component} from "react";
import AccountsUIWrapper from './AccountsUIWrapper.js';
import {NavLink} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import EventList from "./EventList";
import AddEvent from "./AddEvent";
import Home from "./Home";
import EventDetail from "./EventDetail";
import UserEventList from "./UserEventList.js";

class Nav extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                            <div className="container">
                                <a className="navbar-brand" href="#">Event Manager</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">

                                            <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/events">Events</NavLink>
                                            </li>
                                            { this.props.currentUser ? <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/new">Create event</NavLink>
                                            </li> :""}
                                            { this.props.currentUser ? <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/myEvents">My events</NavLink>
                                            </li> :""}
                                            <li className="nav-item"><AccountsUIWrapper/></li>

                                        </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <Route exact path="/events" render={()=><EventList eventsList={this.props.eventsList} /> } />
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/new" component={AddEvent}/>
                    <Route exact path="/events/:eventId" component={EventDetail} />
                    <Route exact path="/myEvents" render = {()=><UserEventList eventsList={this.props.eventsList} currentUser ={this.props.currentUser}/>}/>
                </div>
            </Router>

        );
    }
}
export default Nav;
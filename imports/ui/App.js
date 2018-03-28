import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withTracker} from 'meteor/react-meteor-data';

import Nav from './Nav.js';
import EventDetail from './EventDetail.js';

// App component - represents the whole app
class App extends Component {

    render() {
        return (
            <div>
                <Nav/>
            </div>);
    }
}

export default App;
import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import Nav from "./Nav";

// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div>
                <Nav/>
            </div>);
    }
}

export default App;
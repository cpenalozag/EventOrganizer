import React, {Component} from 'react';
import Item from "./Item";
import ReactDOM from "react-dom"


// Item list component
class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    renderItems() {
        return this.props.items.map((item) => (
            <Item key={item._id} item={item} add = {false}/>
        ));
    }

    handleSubmit(event){
        event.preventDefault();

        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Meteor.call('items.insert', text, this.props.eventId);

        ReactDOM.findDOMNode(this.refs.textInput).value="";
    }

    render() {
        return (
            <div className="comments media-area">
                <h2 className="text-center title">Items</h2>
                {Meteor.userId() ?
                    <form onSubmit={this.handleSubmit.bind(this)} className="new-task">
                        <input className="form-control border-input" type="text" ref="textInput" placeholder="Type to add new item"/>
                    </form> : ""
                }
                <br/>
                {this.renderItems()}
            </div>
        );
    }
}

export default ItemList;

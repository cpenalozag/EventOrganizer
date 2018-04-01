import React, {Component} from 'react';
import Item from "./Item";

// Item list component
class ItemList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    renderItems() {
        return this.props.items.map((item) => (
            <Item key={item._id} item={item}/>
        ));
    }

    render() {
        return (
            <div className="comments media-area">
                <h2 className="text-center title">Items</h2>
                {this.renderItems()}
            </div>
        );
    }
}

export default ItemList;

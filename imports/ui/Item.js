import React, {Component} from 'react';

export default class Item extends Component {

    toggledChecked() {
        Meteor.call("items.setChecked", this.props.item._id, !this.props.item.checked);
    }


    render() {
        return (
            <ul className={!!this.props.item.checked ? "tick" : "noTick"}>
                    <input type="checkbox" 
                           readOnly
                           checked={!!this.props.item.checked}
                           onClick={this.toggledChecked.bind(this)}/>

                    <span className="text"><strong>{this.props.item.username}</strong>:{this.props.item.text}</span>
            </ul>

        );
    }
}
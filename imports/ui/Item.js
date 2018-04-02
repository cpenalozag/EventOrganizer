import React, {Component} from 'react';

export default class Item extends Component{

    toggledChecked(){
        Meteor.call("items.setChecked", this.props.item._id, !this.props.item.checked);
    }



    render(){
        return(
            <li>
                <input type="checkbox"
                       readOnly
                       checked={!!this.props.item.checked}
                       onClick={this.toggledChecked.bind(this)}/>

                <span className="text">
                    {this.props.item.text}</span>
            </li>

        );
    }
}
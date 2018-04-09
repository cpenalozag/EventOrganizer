import React, {Component} from 'react';

export default class Item extends Component {

    toggledChecked() {
        Meteor.call("items.setChecked", this.props.item._id, !this.props.item.checked);
    }

    //Aca tambien se le podria agregar un ejemplo de un item, no me queda claro que tipo de items se pueden agregar
    render() {
        return (
            <div>
                {!this.props.add ?
                    <ul className={!!this.props.item.checked ? "tick" : "noTick"}>
                        {Meteor.userId() ?
                            <input className="form-check-label " type="checkbox" readOnly
                                   checked={!!this.props.item.checked} onClick={this.toggledChecked.bind(this)}/> : ""
                        }

                        <span className="text">
                    <strong>  {this.props.item.username}</strong>:  {this.props.item.text}</span>
                    </ul> :
                    <ul className="notick">
                        <span className="text">
                    {this.props.item.text}</span>
                    </ul>}
            </div>


        );
    }
}

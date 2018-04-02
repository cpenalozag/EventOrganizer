import React, {Component} from 'react';

export default class Item extends Component {

    toggledChecked() {
        Meteor.call("items.setChecked", this.props.item._id, !this.props.item.checked);
    }


    render() {
        return (
<<<<<<< HEAD
            <ul className={!!this.props.item.checked ? "tick" : "noTick"}>
                    <input type="checkbox" 
                           readOnly
                           checked={!!this.props.item.checked}
                           onClick={this.toggledChecked.bind(this)}/>

                    <span className="text"><strong>{this.props.item.username}</strong>:{this.props.item.text}</span>
            </ul>
=======
            <div>
                {!this.props.add ?
                    <ul className={!!this.props.item.checked ? "tick" : "noTick"}>
                        <input className="form-check-label"
                            type="checkbox"
                               readOnly
                               checked={!!this.props.item.checked}
                               onClick={this.toggledChecked.bind(this)}/>

                        <span className="text">
                    <strong>{this.props.item.username}</strong> : {this.props.item.text}</span>
                    </ul>:
                    <ul className="tick">
                        <span className="text">
                    {this.props.item.text}</span>
                    </ul>}
            </div>

>>>>>>> 4ec66dc67366d446c73a23afbd89b6953595003a

        );
    }
}
import React, {Component} from 'react';

export default class Item extends Component{



    toggledChecked(){
        Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
    }

    render(){
        return(
            <li>
                <input type="checkbox"
                       readOnly
                       checked={!!this.props.task.checked}
                       onClick={this.toggledChecked.bind(this)}/>

                <span className="text">
                    {this.props.task.text}</span>
            </li>

        );
    }
}
import React, {Component} from 'react';

export default class Item extends Component {

    toggledChecked() {
        Meteor.call("items.setChecked", this.props.item._id, !this.props.item.checked);
    }


    render() {
        return (
            <div>
                {!this.props.add ?
                    <div>
                        {/*Camilo Zambrano: There is no need to negate twice here. If you have ANYTHING other than null, 0
                        or undefined, it will evaluate to "true" */}
                        <ul className={this.props.item.checked ? "tick ul-cb" : "noTick ul-cb"}>
                            {Meteor.userId() ?
                                <input className="form-check-label " type="checkbox" readOnly
                                       checked={!!this.props.item.checked} onClick={this.toggledChecked.bind(this)}/>
                                : ""
                            }
                            <span className="text-center" className="text">
                    <strong>  {this.props.item.username}</strong>: {this.props.item.text}</span>
                        </ul>
                        {this.props.item.checkedBy && !!this.props.item.checked  ? <div> Checked By: {this.props.item.checkedBy} <br/><br/> </div>
                            :""
                        }
                    </div> :
                    <ul className="notick">
                        <span className="text-cl">s
                            {this.props.item.text}</span>
                    </ul>}
            </div>


        );
    }
}

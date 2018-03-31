import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import {Events} from "../api/events";
import {ParticipantLists} from "../api/participantLists";
import {ItemLists} from "../api/itemLists";
import {Comments} from "../api/comments";

// Add event component
export default class AddEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            goSearchEv : false
        };
    }

    goSearch(){
        this.setState({goSearchEv:true});
    }
    addEvent(e){
        e.preventDefault();
        Events.insert({
            name: this.refs.name.value,
            date: this.refs.date.value,
            location: this.refs.location.value,
            category: this.refs.category.value,
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGqrm54cL72Gnm3kohh3H2zXMN7F43A1_iyKael3bjjwFBY2M",
            description: this.refs.description.value,
            createdAt: new Date(),
        });
        res = Events.find({},{limit:1, sort: {createdAt: -1}}).fetch();
        ParticipantLists.insert({
            eventId:res[0]._id,
            participants:[]})
        ItemLists.insert({
            eventId:res[0]._id,
            items:[]});
        Comments.insert({
            eventId:res[0]._id,
            comments:[]});
        this.setState({goSearchEv:true});
    }

    render() {
        if(this.state.goSearchEv)
        {
            return(
                <Redirect to={"/events"}/>
            );
        }
        return (
            <div className="blog-2 section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 ml-auto mr-auto">
                            <h2 className="title">Create an Event</h2>
                            <form>
                                <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                        <h6>Event Image</h6>
                                        <div className="fileinput fileinput-new text-center" data-provides="fileinput">
                                            <div className="medium-img fileinput-new thumbnail img-no-padding">
                                                <img src="images/Placeholder.png" alt=""/>
                                            </div>
                                            <div className="fileinput-preview fileinput-exists thumbnail img-no-padding"></div>
                                            <div>
                                                <input ref="image" name="image" type="file"/>
                                                <a href="#paper-kit" className="btn btn-link btn-danger fileinput-exists"
                                                   data-dismiss="fileinput"> Remove</a>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-md-8 col-sm-8">
                                        <div className="form-group">
                                            <h6>Name <span className="icon-danger">*</span></h6>
                                            <input ref="name" className="form-control border-input" required
                                                   placeholder="Enter the event name here..."
                                                   name="name" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <h6>Location <span className="icon-danger">*</span></h6>
                                            <input ref="location" className="form-control border-input" required
                                                   placeholder="Enter the location of the event here..."
                                                   type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <h6>Category <span className="icon-danger">*</span></h6>
                                            <select ref="category" className="form-control">
                                                <option value="Art & Music">Art & Music</option>
                                                <option value="Social">Social</option>
                                                <option value="Education">Education</option>
                                                <option value="Networking">Networking</option>
                                                <option value="Dining">Dining</option>
                                                <option value="Nightlife & Parties">Nightlife & Parties</option>
                                                <option value="Athletic">Athletic</option>
                                                <option value="Fairs & Festivals">Fairs & Festivals</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <h6>Date <span className="icon-danger">*</span></h6>
                                            <input ref="date" className="form-control border-input" required id="date" type="date"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <h6>Description</h6>
                                            <textarea ref="description" className="form-control textarea-limited" required
                                                      placeholder="Describe your event..."
                                                      rows="6" maxLength="200"></textarea>
                                        </div>
                                    </div>
                                </div>


                                <div className="row buttons-row">
                                    <div className="col-md-6 col-sm-6">
                                        <button onClick={this.goSearch.bind(this)} className="btn btn-outline-danger btn-block btn-round">Cancel</button>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <button onClick={this.addEvent.bind(this)} className="btn btn-primary btn-block btn-round">Save &amp; Publish</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


import React, {Component} from 'react';

// Add event component
export default class AddEvent extends Component {

    addEvent(e){
        e.preventDefault();
        const body = JSON.stringify({
            name: this.refs.name.value,
            location: this.refs.location.value,
            category: this.refs.category.value,
            image: "http://www.bikehouse.com.co/contenidos/images/ecommerce_productos/padrone-mas.jpg",
            description: this.refs.description.value
        });
        console.log(body);
        request
            .post("/addAccessory")
            .set("Content-Type", "application/json")
            .send(body);
    }

    render() {
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
                                                <input name="image" type="file"/>
                                                <a href="#paper-kit" className="btn btn-link btn-danger fileinput-exists"
                                                   data-dismiss="fileinput"> Remove</a>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-md-8 col-sm-8">
                                        <div className="form-group">
                                            <h6>Name <span className="icon-danger">*</span></h6>
                                            <input className="form-control border-input" required
                                                   placeholder="Enter the event name here..."
                                                   name="name" type="text"/>
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <h6>Location <span className="icon-danger">*</span></h6>
                                            <input className="form-control border-input" required
                                                   placeholder="Enter the location of the event here..."
                                                   type="text"/>
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <h6>Category <span className="icon-danger">*</span></h6>
                                            <select className="form-control">
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
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <h6>Description</h6>
                                            <textarea className="form-control textarea-limited" required
                                                      placeholder="Describe your event..."
                                                      rows="6" maxLength="150"></textarea>
                                        </div>
                                    </div>
                                </div>


                                <div className="row buttons-row">
                                    <div className="col-md-6 col-sm-6">
                                        <button className="btn btn-outline-danger btn-block btn-round">Cancel</button>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <button className="btn btn-primary btn-block btn-round">Save &amp; Publish</button>
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


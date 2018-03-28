import React, {Component} from 'react';


// Home component - represents the whole app
class Home extends Component {

    render() {
        return (
            <div className="header-2">
                <div className="page-header">
                    <div className="filter"></div>
                    <div className="content-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 text-left">
                                    <h1 className="title">Eventirris</h1>
                                    <h5>Now you have no excuses, it's time to surprise your clients, your competitors, and why not, the world. You probably won't have a better chance to show off all your potential if it's not by designing a website for your own agency or web studio.</h5>
                                    <br/>
                                        <div className="buttons">
                                            <a href="#" className="btn btn-danger btn-lg">
                                                Read More
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h2 className="title">Why our product is the best</h2>
                            <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here.</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className=""></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Beautiful Gallery</h4>
                                    <p className="description">Spend your time generating new ideas. You don't have to think of implementing.</p>
                                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className="nc-icon nc-bulb-63"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">New Ideas</h4>
                                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>
                                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className="nc-icon nc-chart-bar-32"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Statistics</h4>
                                    <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>
                                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info">
                                <div className="icon icon-danger">
                                    <i className="nc-icon nc-sun-fog-29"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Delightful design</h4>
                                    <p>Find unique and handmade delightful designs related items directly from our sellers.</p>
                                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
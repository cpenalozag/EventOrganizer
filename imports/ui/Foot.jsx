/* eslint-disable no-unused-vars */
import React, {Component} from "react";

class Foot extends Component {

    render() {
        return (
            <footer className="footer section-black">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <nav className="footer-nav">
                                <ul>
                                    <li><a target="_blank" href="https://cpenalozag.github.io/">Carlos</a></li>
                                    <li><a target="_blank" href="https://ca-montenegro.github.io/">Camilo</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="credits ml-auto">
				<span className="copyright">
					© <script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js"/>
                    Made with <i className="fa fa-heart heart"/> by Carlos Penaloza &amp; Camilo Montenegro
				</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Foot;

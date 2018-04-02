/* eslint-disable no-unused-vars */
import React, {Component} from "react";

class Foot extends Component {

    render() {
        return (
            <footer className="footer section-black">
                <div className="container">
                    <div className="row">
                        <nav className="footer-nav">
                            <ul>
                                <li><a href="https://cpenalozag.github.io/">Carlos</a></li>
                                <li><a href="https://ca-montenegro.github.io/">Camilo</a></li>
                            </ul>
                        </nav>
                        <div className="credits ml-auto">
				<span className="copyright">
					© <script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js"></script>
                    <script>
                        document.write(new Date().getFullYear())
                    </script>
                    2018, made with <i className="fa fa-heart heart"></i> by Carlos Penaloza &amp; Camilo Montenegro
				</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Foot;

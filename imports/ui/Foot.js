/* eslint-disable no-unused-vars */
import React, {Component} from "react";

class Foot extends Component {

    render() {
        return (
            <footer class="footer section-black">
                <div class="container">
                    <div class="row">
                        <nav class="footer-nav">
                            <ul>
                                <li><a href="https://cpenalozag.github.io/">Carlos</a></li>
                                <li><a href="https://ca-montenegro.github.io/">Camilo</a></li>
                            </ul>
                        </nav>
                        <div class="credits ml-auto">
				<span class="copyright">
					© <script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js"></script>
                    <script>
                        document.write(new Date().getFullYear())
                    </script>
                    2018, made with <i class="fa fa-heart heart"></i> by Carlos Penaloza &amp; Camilo Montenegro
				</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Foot;

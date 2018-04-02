/* eslint-disable no-unused-vars */
import React, {Component} from "react";

class Foot extends Component {

  render() {
    return (
      <footer>
        <div className="container footer">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <h5>About</h5>
              <p>Event - Organizer</p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <h5>Accessories</h5>
              <ul>
                <li><a href="/accessories">Browse the catalog</a>
                </li>
                <li><a href="/submit">Submit Accessory</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-12">
              <h5>Newsletter</h5>
              <form>
                <div className="form-group">
                  <input className="form-control" type="text"/>
                </div>
                <button type="submit submit-btn" className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Foot;

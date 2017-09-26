import React, { Component } from "react";
import { Link } from "react-router-dom";

class Explorer extends Component {
  render() {
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11">
        <div className="col-lg-3 tiles">
          <div className="thumbnail">
            <img src="./images/trooper.jpg" alt="..." />
            <div className="caption">
              <h3>People</h3>
              <hr />
              <Link to="/people/">
                <button className="btn btn-primary">Let's go!</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3  tiles">
          <div className="thumbnail">
            <img src="./images/falcon.jpg" alt="..." />
            <div className="caption">
              <h3>Starships</h3>
              <hr />
              <Link to="/starships/">
                <button className="btn btn-primary">Let's go!</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3  tiles">
          <div className="thumbnail">
            <img src="./images/films.jpg" alt="..." />
            <div className="caption">
              <h3>Films</h3>
              <hr />
              <Link to="/films/">
                <button className="btn btn-primary">Let's go!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Explorer;

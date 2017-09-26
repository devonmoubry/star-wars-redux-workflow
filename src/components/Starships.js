import React, { Component } from "react";
import { Link } from "react-router-dom";

class StarshipsList extends Component {
  render() {
    let starshipModel = this.props.starshipModel;
    let data = this.props.starships.sort();
    let List = data.map(starships => {
      let count = data.indexOf(starships) + 1;
      let films = starships.films.map(films => {
        let endpoint = films.substr(films.indexOf("/api/") + 5);
        return (
          <li className="list-group-item" key={films}>
            <Link to={`/details/${endpoint}`}>{endpoint}</Link>
          </li>
        );
      });
      return (
        <div
          key={starships.name}
          className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11 card">
          <div className="col-lg-6">
            <div className="profile">
              <i className="fa fa-space-shuttle" aria-hidden="true" />
              <span> {count}</span>
              <h3 className="headings">{starships.name}</h3>
              <h4 className="badge">API Endpoint: {this.endpoint}</h4>
              <hr />
              <h4 className="sub-headings">Profile</h4>
              <dl className="dl-horizontal">
                <dt>MGLT</dt>
                <dd>{starships.MGLT}</dd>
                <dt>Manufacturer</dt>
                <dd>{starships.manufacturer}</dd>
                <dt>Model</dt>
                <dd>
                  {/*>>>>>>>Here we call our action function, passing in the desired data<<<<<<<*/}
                  <button
                    className="btn btn-default"
                    onClick={() => starshipModel(starships.model)}>
                    Action
                  </button>
                </dd>
                <dt>Class</dt>
                <dd>{starships.starship_class}</dd>
                <dt>Hyperdrive</dt>
                <dd>{starships.hyperdrive_rating}</dd>
                <dt>Max Speed</dt>
                <dd>{starships.max_atmosphering_speed}</dd>
                <dt>Crew</dt>
                <dd>{starships.crew}</dd>
                <dt>Passengers</dt>
                <dd>{starships.passengers}</dd>
                <dt>Cargo</dt>
                <dd>{starships.cargo_capacity}</dd>
                <dt>Length</dt>
                <dd>{starships.length}</dd>
                <dt>Consumables</dt>
                <dd>{starships.consumables}</dd>
              </dl>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className="sub-headings">Film Endpoints</h4>
            <hr />
            <ul className="list-group">{films}</ul>
          </div>
        </div>
      );
    });
    return (
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11">
          <h1 className="headings">Starships</h1>
          <hr />
        </div>
        {List}
      </div>
    );
  }
}

export default StarshipsList;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class FilmsList extends Component {
  render() {
    let filmDirector = this.props.filmDirector;
    let data = this.props.films;
    let List = data.map(films => {
      let count = data.indexOf(films) + 1;
      let url = films.url;
      let endpoint = url.substr(url.lastIndexOf("s/*") - 1, 1);
      let people = films.characters.map(people => {
        let endpoint = people.substr(people.indexOf("/api/") + 5);
        return (
          <li className="list-group-item" key={people}>
            <Link to={`/details/${endpoint}`}>{endpoint}</Link>
          </li>
        );
      });
      let starships = films.starships.map(starships => {
        let endpoint = starships.substr(starships.indexOf("/api/") + 5);
        return (
          <li className="list-group-item" key={starships}>
            <Link to={`/details/${endpoint}`}>{endpoint}</Link>
          </li>
        );
      });

      return (
        <div
          key={films.episode_id}
          className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11 card">
          <div className="col-lg-6">
            <div className="profile">
              <i className="fa fa-film" aria-hidden="true" />
              <span> {count}</span>
              <h3 className="headings">{films.title}</h3>
              <h4 className="badge">API Endpoint: {endpoint}</h4>
              <hr />
              <h4 className="sub-headings">Profile</h4>
              <dl className="dl-horizontal">
                <dt>Opening</dt>
                <dd>{films.opening_crawl}</dd>
                <dt>Director</dt>
                <dd>
                  {/*>>>>>>>Here we call our action function, passing in the desired data<<<<<<<*/}
                  <button
                    className="btn btn-default"
                    onClick={() => filmDirector(films.director)}>
                    Action
                  </button>
                </dd>
                <dt>Producer</dt>
                <dd>{films.producer}</dd>
                <dt>Episode</dt>
                <dd>{films.episode_id}</dd>
                <dt>Release</dt>
                <dd>{films.release_date}</dd>
              </dl>
            </div>
          </div>
          <div className="col-lg-3">
            <h4 className="sub-headings">People Endpoint</h4>
            <hr />
            <ul className="list-group">{people}</ul>
          </div>
          <div className="col-lg-3">
            <h4 className="sub-headings">Starships Endpoint</h4>
            <hr />
            <ul className="list-group">{starships}</ul>
          </div>
        </div>
      );
    });
    return (
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11">
          <h1 className="headings">Films</h1>
          <hr />
        </div>
        {List}
      </div>
    );
  }
}

export default FilmsList;

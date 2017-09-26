import React, { Component } from "react";
// Import connect
import { connect } from "react-redux";
// Import action
import { setDetails } from "../actions/index";
// Import component
import View from "../components/View";
// Import bindActionCreators
import { bindActionCreators } from "redux";

class Details extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }
  handleBack() {
    return this.props.history.goBack();
  }

  componentWillMount() {
    let endpoint = this.props.match.params.endpoint;
    let id = this.props.match.params.id;
    let url = "https://swapi.co/api/" + endpoint + "/" + id + "/";
    switch (endpoint) {
      case "people":
        let x = this.props.people.length,
          character;
        while (x--) {
          if (url === this.props.people[x].url) {
            console.log("peep");
            character = this.props.people[x];
            break;
          }
        }
        this.props.setDetails(character);
        break;
      case "films":
        let y = this.props.films.length,
          film;
        while (y--) {
          if (url === this.props.films[y].url) {
            film = this.props.films[y];
            break;
          }
        }
        this.props.setDetails(film);
        break;
      case "starships":
        let z = this.props.starships.length,
          starship;
        while (z--) {
          if (url === this.props.starships[z].url) {
            starship = this.props.starships[z];
            break;
          }
        }
        this.props.setDetails(starship);
        break;
      default:
        this.props.setDetails("Error");
    }
  }

  render() {
    console.log("Details container props: ", this.props);
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-11">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <h1>Category: {this.props.match.params.endpoint}</h1>
          </div>
          <View
            details={this.props.details}
            endpoint={this.props.match.params.endpoint}
          />
          <div className="col-lg-8 col-lg-offset-2 back">
            <button
              className="btn btn-primary pull-right"
              onClick={this.handleBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Here we map component's action <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  return bindActionCreators({ setDetails: setDetails }, dispatch);
}

// Here we map component's state <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mapStateToProps(state) {
  // What is returned will show up as PROPS inside of the PeopleList component.
  // Inside of this function we generally return an object.
  return {
    people: state.people,
    films: state.films,
    starships: state.starships,
    details: state.details
  };
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps, mapDispatchToProps)(Details);

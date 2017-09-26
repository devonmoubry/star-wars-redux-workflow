import React, { Component } from "react";
// Import connect
import { connect } from "react-redux";
// Import action
import { filmDirector } from "../actions/index";
// Import component
import FilmsList from "../components/Films";
// Import bindActionCreators
import { bindActionCreators } from "redux";

class Films extends Component {
  render() {
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <FilmsList
          films={this.props.films}
          filmDirector={this.props.filmDirector}
        />
      </div>
    );
  }
}

// Here we map component's state <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mapStateToProps(state) {
  // What is returned will show up as PROPS inside of the PeopleList component.
  // Inside of this function we generally return an object.
  return {
    films: state.films,
    stateExample: state.stateExample
  };
}

// Here we map component's action <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  return bindActionCreators({ filmDirector: filmDirector }, dispatch);
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'Films.'
export default connect(mapStateToProps, mapDispatchToProps)(Films);

import React, { Component } from "react";
// Import connect
import { connect } from "react-redux";
// Import action
import { homeWorld } from "../actions/index";
// Import component
import PeopleList from "../components/People";
// Import bindActionCreators
import { bindActionCreators } from "redux";

class People extends Component {
  render() {
    console.log("REACT: Rendering People...", this.props);
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        {/*State is now available via props thanks to Redux! <<<<<<<<<<<<<<<<*/}
        <PeopleList
          people={this.props.people}
          homeworld={this.props.homeWorld}
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
    people: state.people,
    stateExample: state.stateExample
  };
}

// Here we map component's action <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  return bindActionCreators({ homeWorld: homeWorld }, dispatch);
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps, mapDispatchToProps)(People);

import { combineReducers } from "redux";
import * as ActionTypes from "../actionTypes/actions";

import PeopleData from "../data/Peopledata";
import FilmsData from "../data/Filmsdata";
import StarshipsData from "../data/Starshipsdata";

function details(state = "", action) {
  switch (action.type) {
    case ActionTypes.DETAILS:
      console.log(
        "Just triggered DETAILS actionType and set state. See 'details' below V"
      );
      return action.payload.data;

    default:
      return state;
  }
}

function stateExample(state = "", action) {
  switch (action.type) {
    case ActionTypes.SHOW_WORLD:
      return "Just triggered SHOW_WORLD actionType and set state!";

    case ActionTypes.SHOW_DIRECTOR:
      return "Just triggered SHOW_DIRECTOR actionType and set state!";

    case ActionTypes.SHOW_MODEL:
      return "Just triggered SHOW_MODEL actionType and set state!";

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  people: PeopleData,
  films: FilmsData,
  starships: StarshipsData,
  stateExample: stateExample,
  details: details
});

export default rootReducer;

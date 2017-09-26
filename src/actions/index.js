import * as ActionTypes from "../actionTypes/actions";
// The above import takes care of importing all action types.

export const homeWorld = world => {
  return {
    type: ActionTypes.SHOW_WORLD,
    payload:
      alert("Homeworld: " + world + " Check console") +
      console.log("Dispatching: ActionTypes.SHOW_WORLD. Check state below V")
  };
};

export const setDetails = data => {
  console.log(
    "ACTIONS: setDetails(). received data and passing the following payload:",
    data
  );
  return {
    type: ActionTypes.DETAILS,
    payload: { data }
  };
};

export const filmDirector = director => {
  return {
    type: ActionTypes.SHOW_DIRECTOR,
    payload: alert("Director: " + director)
  };
};
export const starshipModel = model => {
  return {
    type: ActionTypes.SHOW_MODEL,
    payload: alert("Model: " + model)
  };
};

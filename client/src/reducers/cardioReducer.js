import _ from "lodash";
import {
  CREATE_CARDIOLOG,
  FETCH_CARDIOLOG,
  FETCH_CARDIOLOGS,
  DELETE_CARDIOLOG,
  EDIT_CARDIOLOG
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CARDIOLOGS:
      // create new object with everything in state, then create an object out of it
      // using mapKeys where the key is the id of the individual logs
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_CARDIOLOG:
      // create new object with everything in state and the specific log using the id
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CARDIOLOG:
      // create new object with everything in state and the specific log using the id
      return { state, [action.payload.id]: action.payload };
    case EDIT_CARDIOLOG:
      // create new object with everything in state and the specific log using the id
      return { state, [action.payload.id]: action.payload };
    case DELETE_CARDIOLOG:
      // _.omit creates a new object with everything in state
      // without the value passed in from action.payload
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

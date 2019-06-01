import {
  CREATE_CARDIOLOG,
  FETCH_CARDIOLOG,
  FETCH_CARDIOLOGS,
  DELETE_CARDIOLOG,
  EDIT_CARDIOLOG
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CARDIOLOG:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CARDIOLOG:
      return { state, [action.payload.id]: action.payload };
    case EDIT_CARDIOLOG:
      return { state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

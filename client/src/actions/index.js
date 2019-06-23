// imported api and action types
import cardiologs from "../apis/cardiologs";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_CARDIOLOG,
  FETCH_CARDIOLOG,
  FETCH_CARDIOLOGS,
  DELETE_CARDIOLOG,
  EDIT_CARDIOLOG
} from "./types";

// Action creator to sign in user with given userId
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

// Action creator to sign out a user
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// Action creator to create a new cardio log with the values filled in from the form
export const createCardioLog = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await cardiologs.post("/cardiologs", {
    ...formValues,
    userId
  });

  dispatch({ type: CREATE_CARDIOLOG, payload: response.data });
  // Do programmatic navigation to get user back to route page
  // push navigates user throughout app
  history.push("/");
};

// Action creator to fetch a list of all the cardio logs
export const fetchCardioLogs = () => async dispatch => {
  const response = await cardiologs.get("/cardiologs");

  dispatch({ type: FETCH_CARDIOLOGS, payload: response.data });
};

// Action creator to fetch a specific cardio log based on the ID provided
export const fetchCardioLog = id => async dispatch => {
  const response = await cardiologs.get(`/cardiologs/${id}`);

  dispatch({ type: FETCH_CARDIOLOG, payload: response.data });
};

// Action creator to edit a specific cardio log based on the ID and form values provided
export const editCardioLog = (id, formValues) => async dispatch => {
  const response = await cardiologs.patch(`/cardiologs/${id}`, formValues);

  dispatch({ type: EDIT_CARDIOLOG, payload: response.data });
  history.push("/");
};

// Action creator to delete a specific cardio log based on the ID provided
export const deleteCardioLog = id => async dispatch => {
  await cardiologs.delete(`/cardiologs/${id}`);

  dispatch({ type: DELETE_CARDIOLOG, payload: id });
  history.push("/");
};

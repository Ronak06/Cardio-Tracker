import cardiologs from "../apis/cardiologs";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_CARDIO_LOG,
  FETCH_CARDIO_LOG,
  FETCH_CARDIO_LOGS,
  DELETE_CARDIO_LOG,
  EDIT_CARDIO_LOG
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
export const createCardioLog = formValues => async dispatch => {
  const response = await cardiologs.post("/cardiologs", formValues);

  dispatch({ type: CREATE_CARDIO_LOG, payload: response.data });
};

// Action creator to fetch a list of all the cardio logs
export const fetchCardioLogs = () => async dispatch => {
  const response = await cardiologs.get("/cardiologs");

  dispatch({ type: FETCH_CARDIO_LOGS, payload: response.data });
};

// Action creator to fetch a specific cardio log based on the ID provided
export const fetchCardioLog = id => async dispatch => {
  const response = await cardiologs.get(`/cardiologs/${id}`);

  dispatch({ type: FETCH_CARDIO_LOG, payload: response.data });
};

// Action creator to edit a specific cardio log based on the ID and form values provided
export const editCardioLog = (id, formValues) => async dispatch => {
  const response = await cardiologs.put(`/cardiologs/${id}`, formValues);

  dispatch({ type: EDIT_CARDIO_LOG, payload: response.data });
};

// Action creator to delete a specific cardio log based on the ID provided
export const deleteCardioLog = id => async dispatch => {
  await cardiologs.delete(`/cardiologs/${id}`);

  dispatch({ type: DELETE_CARDIO_LOG, payload: id });
};

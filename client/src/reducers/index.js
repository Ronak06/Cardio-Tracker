import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import cardioReducer from "./cardioReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  cardiologs: cardioReducer
});

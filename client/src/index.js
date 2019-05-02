import React from "react";
import ReactDOM from "react-dom";
// get provider from react-redux
import { Provider } from "react-redux";
// get createStore from redux
// get applyMiddleware and compose for Redux DevTools
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
// get reducers for redux store
import reducers from "./reducers";

// for Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store, composeEnhancers(applyMiddleware()) for Redux DevTools
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  // include Provider for redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

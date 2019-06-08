// importing dependencies
import React from "react";
import { Router, Route } from "react-router-dom";

// importing files
import CardioCreate from "./caridoLogs/CardioCreate";
import CardioEdit from "./caridoLogs/CardioEdit";
import CardioDelete from "./caridoLogs/CardioDelete";
import CardioList from "./caridoLogs/CardioList";
import CardioShow from "./caridoLogs/CardioShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={CardioList} />
        <Route path="/cardioLogs/new" exact component={CardioCreate} />
        <Route path="/cardioLogs/edit" exact component={CardioEdit} />
        <Route path="/cardioLogs/delete" exact component={CardioDelete} />
        <Route path="/cardioLogs/show" exact component={CardioShow} />
      </Router>
    </div>
  );
};

export default App;

// importing dependencies
import React from "react";
import { Router, Route, Switch } from "react-router-dom";

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
        <Switch>
          <Route path="/" exact component={CardioList} />
          <Route path="/cardiologs/new" exact component={CardioCreate} />
          <Route path="/cardiologs/edit/:id" exact component={CardioEdit} />
          <Route path="/cardiologs/delete/:id" exact component={CardioDelete} />
          <Route path="/cardiologs/:id" exact component={CardioShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

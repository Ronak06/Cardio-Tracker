import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// importing files
import CardioCreate from "./caridoLogs/CardioCreate";
import CardioEdit from "./caridoLogs/CardioEdit";
import CardioDelete from "./caridoLogs/CardioDelete";
import CardioList from "./caridoLogs/CardioList";
import CardioShow from "./caridoLogs/CardioShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={CardioList} />
        <Route path="/cardioLogs/new" exact component={CardioCreate} />
        <Route path="/cardioLogs/edit" exact component={CardioEdit} />
        <Route path="/cardioLogs/delete" exact component={CardioDelete} />
        <Route path="/cardioLogs/show" exact component={CardioShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { connect } from "react-redux";
import { createCardioLog } from "../../actions";
import CardioForm from "./CardioForm";

class CardioCreate extends React.Component {
  // When user submits the form, it creates the log in the db
  onSubmit = formValues => {
    this.props.createCardioLog(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Cardio Log</h3>
        <CardioForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createCardioLog }
)(CardioCreate);

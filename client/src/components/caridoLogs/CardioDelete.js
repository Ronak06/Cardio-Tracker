import React, { Fragment } from "react";
import Modal from "../Modal";
import history from "../../history";

class CardioDelete extends React.Component {
  renderActions() {
    return (
      <Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </Fragment>
    );
  }

  render() {
    return (
      <div>
        Stream Delete
        <Modal
          title="Delete Cardio Log"
          content=" Are you sure you want to delete this Cardio log?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default CardioDelete;

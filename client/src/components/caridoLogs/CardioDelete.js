import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import history from "../../history";
import { fetchCardioLog, deleteCardioLog } from "../../actions";

class CardioDelete extends React.Component {
  componentDidMount() {
    this.props.fetchCardioLog(this.props.match.params.id);
  }

  renderActions() {
    const cardioLog_id = this.props.match.params.id;
    return (
      <Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteCardioLog(cardioLog_id)}
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </Fragment>
    );
  }

  renderContent() {
    if (!this.props.cardioLog) {
      return "Are you sure you want to delete this cardio log?";
    }

    return `Are you sure you want to delete the following cardio log:
    ${this.props.cardioLog.name} ran ${
      this.props.cardioLog.distance
    } miles on ${this.props.cardioLog.date}? `;
  }

  render() {
    return (
      <Modal
        title="Delete Cardio Log"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { cardioLog: state.cardiologs[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchCardioLog, deleteCardioLog }
)(CardioDelete);

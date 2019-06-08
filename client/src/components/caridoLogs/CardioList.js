import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCardioLogs } from "../../actions";

class CardioList extends React.Component {
  componentDidMount() {
    this.props.fetchCardioLogs();
  }

  // function renderAdmin, renders the delete and edit buttons if
  // the currently logged in user is the same user that created a cardioLog
  renderAdmin(cardioLog) {
    if (cardioLog.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            className="ui button primary"
            to={`/cardiologs/edit/${cardioLog.id}`}
          >
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  // function renderList, renders the list of cardio logs using semantic-ui
  renderList() {
    return this.props.cardioLogs.map(cardioLog => {
      return (
        <div className="item" key={cardioLog.id}>
          {this.renderAdmin(cardioLog)}
          <i className="large middle aligned icon trophy" />
          <div className="content">
            {cardioLog.name}
            <div className="description">
              Distance: {cardioLog.distance} miles
              <br />
              Time: {cardioLog.time} minutes
              <br />
              Date: {cardioLog.date}
            </div>
          </div>
        </div>
      );
    });
  }

  // function renderCreate, renders a Link tag to be placed on the CardioList page
  // to allow users to directly go to the cardioCreate component
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/cardioLogs/new" className="ui button primary">
            Create Cardio Log
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Cardio Logs</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardioLogs: Object.values(state.cardiologs),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchCardioLogs }
)(CardioList);

import React from "react";
import { connect } from "react-redux";
import { fetchCardioLogs } from "../../actions";
import { Stream } from "stream";

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
          <button className="ui button primary">Edit</button>
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

  render() {
    return (
      <div>
        <h2>Cardio Logs</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardioLogs: Object.values(state.cardiologs),
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchCardioLogs }
)(CardioList);

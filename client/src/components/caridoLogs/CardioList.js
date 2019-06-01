import React from "react";
import { connect } from "react-redux";
import { fetchCardioLogs } from "../../actions";

class CardioList extends React.Component {
  componentDidMount() {
    this.props.fetchCardioLogs();
  }

  renderList() {
    return this.props.cardioLogs.map(cardioLog => {
      return (
        <div className="item" key={cardioLog.id}>
          <i className="large middle aligned icon trophy" />
          <div className="content">
            {cardioLog.name}
            <div className="description">
              Distance: {cardioLog.distance}
              <br />
              Time: {cardioLog.time}
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
  return { cardioLogs: Object.values(state.cardiologs) };
};

export default connect(
  mapStateToProps,
  { fetchCardioLogs }
)(CardioList);

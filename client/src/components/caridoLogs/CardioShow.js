import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCardioLog } from "../../actions";

class CardioShow extends React.Component {
  componentDidMount() {
    this.props.fetchCardioLog(this.props.match.params.id);
  }

  render() {
    if (!this.props.cardioLog) {
      return <div>Loading...</div>;
    }

    const { name, date, time, distance } = this.props.cardioLog;
    return (
      <div>
        <h1>Runner: {name}</h1>
        <h5>Date: {date}</h5>
        <h5>Distance: {distance} miles</h5>
        <h5>Time: {time} minutes</h5>
        <Link className="ui button primary" to="/">
          Back to CardioLogs
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { cardioLog: state.cardiologs[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchCardioLog }
)(CardioShow);

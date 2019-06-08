import React from "react";
import { connect } from "react-redux";
import { fetchCardioLog } from "../../actions";

class CardioEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCardioLog(this.props.match.params.id);
  }
  render() {
    if (!this.props.cardioLog) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.cardioLog.distance}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { cardioLog: state.cardiologs[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchCardioLog }
)(CardioEdit);

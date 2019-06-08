import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchCardioLog, editCardioLog } from "../../actions";
import CardioForm from "./CardioForm";

class CardioEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCardioLog(this.props.match.params.id);
  }

  // onSubmit function, called once user is done editing form
  // action creator is called which passes ID of cardiolog and form values
  onSubmit = formValues => {
    this.props.editCardioLog(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.cardioLog) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Cardio Log</h3>
        <CardioForm
          initialValues={_.pick(
            this.props.cardioLog,
            "name",
            "date",
            "distance",
            "time"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { cardioLog: state.cardiologs[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchCardioLog, editCardioLog }
)(CardioEdit);

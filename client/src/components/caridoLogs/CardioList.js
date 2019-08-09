import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCardioLogs } from "../../actions";

class CardioList extends React.Component {
  state = {
    url: "/cardiologs"
    //sortNum: 5
  };

  componentDidMount() {
    this.props.fetchCardioLogs(this.state.url);
    //console.log(this.props);
  }

  // function renderAdmin, renders the delete and edit buttons if
  // the currently logged in user is the same user that created a cardioLog
  renderAdmin(cardioLog) {
    if (
      cardioLog.userId === this.props.currentUserId &&
      cardioLog.userId !== null
    ) {
      return (
        <div className="right floated content">
          <Link
            className="ui button primary"
            to={`/cardiologs/edit/${cardioLog.id}`}
          >
            Edit
          </Link>
          <Link
            className="ui button negative"
            to={`/cardiologs/delete/${cardioLog.id}`}
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  // function renderList, renders the list of cardio logs using semantic-ui
  renderList() {
    //console.log(this.props.cardiologs);
    return this.props.cardiologs.map(cardioLog => {
      return (
        <div className="item" key={cardioLog.id}>
          {this.renderAdmin(cardioLog)}
          <i className="large middle aligned icon trophy" />
          <div className="content">
            <Link to={`/cardiologs/${cardioLog.id}`} className="header">
              {cardioLog.name}
            </Link>
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
          <Link to="/cardiologs/new" className="ui button primary">
            Create Cardio Log
          </Link>
        </div>
      );
    }
  }

  sortOnChange = () => {
    let val = document.getElementById("sortType").value;

    if (val === "0") {
      this.setState({ url: "/cardiologs?_sort=name&_order=desc" });
      this.props.fetchCardioLogs("/cardiologs?_sort=name&_order=desc");
    } else if (val === "1") {
      this.setState({ url: "/cardiologs?_sort=name&_order=desc" });
      this.props.fetchCardioLogs("/cardiologs?_sort=time&_order=desc");
    } else if (val === "2") {
      this.setState({ url: "/cardiologs?_sort=distance&_order=desc" });
      this.props.fetchCardioLogs("/cardiologs?_sort=distance&_order=desc");
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <h2>Cardio Logs</h2>
        <select
          className="ui dropdown"
          id="sortType"
          onChange={this.sortOnChange}
        >
          <option value="5">Sort list by</option>
          <option value="0">Name</option>
          <option value="1">Time</option>
          <option value="2">Distance</option>
        </select>

        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardiologs: Object.values(state.cardiologs),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchCardioLogs }
)(CardioList);

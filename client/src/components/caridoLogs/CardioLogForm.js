import React from "react";
import { Field, reduxForm } from "redux-form";

class CardioLogForm extends React.Component {
  // Renders errors on form
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // Renders fields on the form but distance field
  renderInput = ({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} />
        {this.renderError(meta)}
      </div>
    );
  };

  // Renders the Distance field on the form
  renderInputDistance = ({ input, label, type, step, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} step={step} />
        {this.renderError(meta)}
      </div>
    );
  };

  // When user submits the form, it creates the log in the db
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="name"
          component={this.renderInput}
          label="Enter Name"
          type="text"
        />
        <Field
          name="date"
          component={this.renderInput}
          label="Enter Date"
          type="date"
        />
        <Field
          name="distance"
          component={this.renderInputDistance}
          label="Enter Distance (in miles)"
          type="number"
          step="0.01"
        />
        <Field
          name="time"
          component={this.renderInput}
          label="Enter Time (e.g. 15:13)"
          type="text"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// Validation for new cardio log form
const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "Please enter a name.";
  } else if (!/^[a-zA-Z ]+$/.test(formValues.name)) {
    errors.name = "Please enter a valid name.";
  }

  if (!formValues.date) {
    errors.date = "Please select a date.";
  }

  if (!formValues.distance) {
    errors.distance = "Please select a distance.";
  }

  if (!formValues.time) {
    errors.time = "Please enter a time.";
  } else if (!/^[0-9][0-9]:[0-9][0-9]$/.test(formValues.time)) {
    errors.time = "Please enter a valid time.";
  }

  return errors;
};

export default reduxForm({ form: "cardioLogForm", validate })(CardioLogForm);

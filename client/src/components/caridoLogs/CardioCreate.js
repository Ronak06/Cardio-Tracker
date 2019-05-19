import React from "react";
import { Field, reduxForm } from "redux-form";

class CardioCreate extends React.Component {
  renderInput({ input, label, type }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} type={type} />
      </div>
    );
  }

  renderInputDistance({ input, label, type, step }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} type={type} step={step} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        className="ui form"
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

export default reduxForm({ form: "cardioCreate" })(CardioCreate);

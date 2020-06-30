import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "react-bootstrap";

class StreamForm extends React.Component {
  renderTextInput = ({ input, label, meta }) => {
    return (
      <Form.Group controlId={input.name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type="text" {...input} />
        {meta.touched && <Form.Text>{meta.error}</Form.Text>}
      </Form.Group>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderTextInput} label="Title: " />
        <Field
          name="description"
          component={this.renderTextInput}
          label="Description: "
        />
        <Button variant="primary" as="button">
          Submit
        </Button>
      </Form>
    );
  }
}

const validate = ({ title, description }) => {
  const errors = {};

  if (!title) errors.title = "You need to enter a title.";

  if (!description) errors.description = "You need to enter a description.";

  return errors;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);

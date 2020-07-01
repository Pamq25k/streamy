import React from "react";
import { connect } from "react-redux";

import { editStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <>
        <h3 className="text-center">Edit Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={this.props.stream}
        />
      </>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return { stream: streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(
  StreamEdit
);

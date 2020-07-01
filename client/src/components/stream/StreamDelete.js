import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import StreamModal from "../StreamModal";
import { deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  showButton = (handleShow) => {
    return (
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>
    );
  };

  actions = (handleClose, handleDelete) => {
    return (
      <>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button onClick={handleClose} className="ml-3">
          Cancel
        </Button>
      </>
    );
  };

  mainAction = () => {
    this.props.deleteStream(this.props.id);
  };

  render() {
    const { showButton, actions, mainAction } = this;

    const modalDetails = {
      title: "Are you sure you want to delete this stream?",
      body: "This change cannot be reverted.",
      showButton,
      actions,
      mainAction,
    };

    return <StreamModal {...modalDetails} />;
  }
}

export default connect(null, { deleteStream })(StreamDelete);

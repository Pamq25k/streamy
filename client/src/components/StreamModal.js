import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";

const StreamModal = ({ title, body, actions, showButton, mainAction }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleAction = () => {
    mainAction();
    setShow(false);
  };

  const renderModal = () => {
    return ReactDOM.createPortal(
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{body}</Modal.Body>
          <Modal.Footer>{actions(handleClose, handleAction)}</Modal.Footer>
        </Modal>
      </>,
      document.getElementById("modal")
    );
  };

  return (
    <>
      {showButton(handleShow)}
      {renderModal()}
    </>
  );
};

export default StreamModal;

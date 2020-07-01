import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import StreamModal from "../StreamModal";

const StreamAdmin = ({ streamUserId, id, deleteStream }) => {
  if (!streamUserId) return null;

  return (
    <div className="mx-auto">
      <StreamModal streamUserId={streamUserId} id={id} />

      <Button variant="danger" className="mr-3">
        Delete
      </Button>
      <Button variant="primary" as={Link} to={`/edit/${id}`}>
        Edit
      </Button>
    </div>
  );
};

export default StreamAdmin;

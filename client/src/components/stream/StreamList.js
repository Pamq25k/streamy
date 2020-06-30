import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(streamUserId, id) {
    if (!streamUserId) return null;

    return (
      <div className="mx-auto">
        <Button variant="danger" className="mr-3">
          Delete
        </Button>
        <Button variant="primary" as={Link} to={`/edit/${id}`}>
          Edit
        </Button>
      </div>
    );
  }

  renderStreams() {
    if (!this.props.streams) {
      return null;
    }

    return this.props.streams.map(
      ({ id, title, description, userId: streamUserId }) => {
        const { userId } = this.props;

        return (
          <Col lg="3" md="4" sm="6" key={id} className="mb-4">
            <ListGroup.Item action as={Link} to={`/${id}`}>
              <h3>{title}</h3>
              <p>{description}</p>
              {userId === streamUserId
                ? this.renderAdmin(streamUserId, id)
                : null}
            </ListGroup.Item>
          </Col>
        );
      }
    );
  }

  render() {
    return (
      <ListGroup>
        <Row>{this.renderStreams()}</Row>
      </ListGroup>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return { streams: Object.values(streams), userId: auth.userId };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);

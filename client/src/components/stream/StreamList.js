import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderStreams() {
    if (!this.props.streams) {
      return null;
    }

    return this.props.streams.map(({ id, title, description }) => {
      const url = "/" + id;
      return (
        <Col lg="3" md="4" sm="6" key={id} className="mb-4">
          <ListGroup.Item action as={Link} to={url}>
            <h3>{title}</h3>
            <p>{description}</p>
          </ListGroup.Item>
        </Col>
      );
    });
  }

  render() {
    return (
      <ListGroup>
        <Row>{this.renderStreams()}</Row>
      </ListGroup>
    );
  }
}

const mapStateToProps = ({ streams }) => {
  return { streams: Object.values(streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);

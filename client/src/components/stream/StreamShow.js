import React from "react";
import { connect } from "react-redux";
import flvjs from "flv.js";

import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildVideo();
  }

  componentDidUpdate() {
    this.buildVideo();
  }

  buildVideo() {
    if (this.player || !this.props.stream) return null;

    this.player = flvjs.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    const { stream } = this.props;

    if (!stream) return null;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls></video>
        <h3>{stream.title}</h3>
        <p>{stream.description}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return { stream: streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

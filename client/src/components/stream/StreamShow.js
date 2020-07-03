import React from "react";
import { connect } from "react-redux";
// import flvjs from "flv.js";
import Hls from "hls.js";
// import dashjs from "dashjs";

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

    const video = this.videoRef.current;
    const videoSrc = `http://localhost:8000/live/${this.props.match.params.id}/index.m3u8`;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", function () {
        video.play();
      });
    }

    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });

    // const dashUrl = `http://localhost:8000/live/${this.props.match.params.id}/index.mpd`;
    // this.player = dashjs.MediaPlayer().create();
    // this.player.initialize(this.videoRef.current, dashUrl, true);
    // console.log(this.player);

    // this.player = flvjs.createPlayer({
    //   type: "flv",
    //   url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    // });
    // this.player.attachMediaElement(this.videoRef.current);
    // this.player.load();
  }

  componentWillUnmount() {
    this.player.destroy();
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

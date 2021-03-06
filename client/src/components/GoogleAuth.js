import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    const gapiConfig = {
      clientId:
        "654580995087-t14rsebonuq5pj7fvlvjeupv6ojp5pb1.apps.googleusercontent.com",
      scope: "email",
    };

    if (window.gapi) {
      window.gapi.load("client:auth2", () => {
        window.gapi.client.init(gapiConfig).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          const isSignedIn = this.auth.isSignedIn;

          this.onAuthChange(isSignedIn.get());
          isSignedIn.listen(() => this.onAuthChange(isSignedIn.get()));
        });
      });
    }
  }

  onAuthChange = (isSignedIn) => {
    const userId = this.auth.currentUser.get().getId();

    isSignedIn ? this.props.signIn(userId) : this.props.signOut();
  };

  onClick = (event) => {
    event.preventDefault();
    this.props.isSignedIn ? this.auth.signOut() : this.auth.signIn();
  };

  renderAuth = () => {
    const { isSignedIn } = this.props;

    if (isSignedIn === null) {
      return (
        <Spinner animation="border" role="status" size="sm">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    if (isSignedIn) {
      return "Sign out";
    } else {
      return "Login with Google";
    }
  };

  render() {
    return (
      <Button variant="danger" className="ml-4" onClick={this.onClick} href="#">
        {this.renderAuth()}
      </Button>
    );
  }
}

const mapStateToProps = ({ auth: { isSignedIn } }) => {
  return { isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

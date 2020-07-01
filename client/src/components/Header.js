import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Streamy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Streams
            </Nav.Link>
            <Nav.Link as={Link} to="/new">
              Create Stream
            </Nav.Link>
            <GoogleAuth />
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="success">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

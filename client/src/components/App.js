import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./Header";
import StreamList from "./stream/StreamList";
import StreamCreate from "./stream/StreamCreate";
import StreamShow from "./stream/StreamShow";
import StreamEdit from "./stream/StreamEdit";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/new" exact component={StreamCreate} />
          <Route path="/:id" exact component={StreamShow} />
          <Route path="/edit/:id" exact component={StreamEdit} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

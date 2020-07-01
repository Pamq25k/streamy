import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import history from "../history";

import Header from "./Header";
import StreamList from "./stream/StreamList";
import StreamCreate from "./stream/StreamCreate";
import StreamShow from "./stream/StreamShow";
import StreamEdit from "./stream/StreamEdit";
import StreamDelete from "./stream/StreamDelete";

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/edit/:id" exact component={StreamEdit} />
          <Route path="/delete/:id" exact component={StreamDelete} />
          <Route path="/new" exact component={StreamCreate} />
          <Route path="/:id" exact component={StreamShow} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

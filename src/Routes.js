import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./Pages/App";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

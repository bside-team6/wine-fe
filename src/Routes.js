import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRegist from "./Pages/adminPage/AdminRegist";
import AdminList from "./Pages/adminPage/AdminList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={AdminList} />
          <Route exact path="/admin/regist" component={AdminRegist} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRegist from "./Pages/adminPage/AdminRegist";
import AdminBoard from "./Pages/adminPage/AdminBoard";
import AdminDetail from "./Pages/adminPage/AdminDetail";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={AdminBoard} />
          <Route exact path="/admin/detail/:id" component={AdminDetail} />
          <Route exact path="/admin/regist" component={AdminRegist} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRegist from "./Pages/adminPage/AdminRegist";
import AdminBoard from "./Pages/adminPage/AdminBoard";
import AdminList from "./Pages/adminPage/AdminList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={AdminBoard} />
          <Route exact path="/admin/registWine" component={AdminRegist} />
          <Route exact path="/admin/listWine" component={AdminList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

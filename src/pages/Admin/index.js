import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminList from './AdminList';
import AdminDetail from './AdminDetail';
import AdminRegist from './AdminRegist';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
  return (
    <Switch>
      <Route exact path="/admin" component={AdminList} />
      <Route path="/admin/detail/:id" component={AdminDetail} />
      <Route path="/admin/regist" component={AdminRegist} />
    </Switch>
  );
}

export default Admin;

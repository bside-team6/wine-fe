import { Route, Switch } from 'react-router-dom';
import AdminDetail from './AdminDetail';
import AdminList from './AdminList';
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

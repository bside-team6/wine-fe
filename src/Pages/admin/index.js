import { Switch, Route } from 'react-router-dom';
import AdminDetail from './AdminDetail';
import AdminList from './AdminList';
import AdminRegist from './AdminRegist';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
  return (
    <Switch>
      <Route exact path="/admin" component={AdminList} />
      <Route exact path="/admin/regist" component={AdminRegist} />
      <Route exact path="/admin/detail/:id" component={AdminDetail} />
    </Switch>
  );
}

export default Admin;

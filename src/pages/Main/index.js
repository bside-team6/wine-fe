import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import KakaoCallback from './KakaoCallback';
import Signup from './Signup';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/kakaoCallback" component={KakaoCallback} /> 
      <Route exact path="/signup" component={Signup} />    
    </Switch>
  );
}

export default Main;

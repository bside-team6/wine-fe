import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import KakaoCallback from './KakaoCallback';
import Signup from './Signup';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route path="/login" component={Login} />
      <Route path="/kakaoCallback" component={KakaoCallback} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}

export default Main;

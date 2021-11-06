import { Route, Switch } from 'react-router-dom';
import KakaoCallback from './KakaoCallback';
import Login from './Login';
import MainSearchBar from './MainSearchBar';
import Signup from './Signup';
import SignupComplete from './SignupComplete';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={MainSearchBar} />
      {/* <Route exact path="/" component={() => <div>Home</div>} /> */}
      <Route path="/login" component={Login} />
      <Route path="/kakaoCallback" component={KakaoCallback} />
      <Route path="/signup/:token" component={Signup} />
      <Route path="/signupComplete" component={SignupComplete} />
    </Switch>
  );
}

export default Main;

import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import KakaoCallback from './KakaoCallback';
import Signup from './Signup';
import MainSearchBar from './MainSearchBar';
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

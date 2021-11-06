import { Switch, Route } from 'react-router-dom';
import SignupStep1 from './SignupStep1';
import KakaoCallback from './KakaoCallback';
import SignupStep2 from './SignupStep2';
import SignupComplete from './SignupComplete';
import GetUserInfo from './GetUserInfo';
import LogOut from './LogOut';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route path="/signupStep1" component={SignupStep1} />
      <Route path="/kakaoCallback" component={KakaoCallback} />
      <Route path="/signupStep2/:token" component={SignupStep2} />
      <Route path="/signupComplete" component={SignupComplete} />
      <Route path="/getUserInfo/:token/:rToken" component={GetUserInfo} />
      <Route path="/logOut" component={LogOut} />
    </Switch>
  );
}

export default Main;

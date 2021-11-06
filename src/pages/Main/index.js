import { Route, Routes } from 'react-router-dom';
import KakaoCallback from './KakaoCallback';
import Login from './Login';
import MainSearchBar from './MainSearchBar';
import Signup from './Signup';
import SignupComplete from './SignupComplete';

function Main() {
  return (
    <Routes>
      <Route index element={<MainSearchBar />} />
      <Route path="login" element={<Login />} />
      <Route path="kakaoCallback" element={<KakaoCallback />} />
      <Route path="signup/:token" element={<Signup />} />
      <Route path="signupComplete" element={<SignupComplete />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default Main;

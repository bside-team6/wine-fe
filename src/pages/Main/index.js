import { Route, Routes } from 'react-router-dom';
import GetUserInfo from './GetUserInfo';
import KakaoCallback from './KakaoCallback';
import LogOut from './LogOut';
import MainSearchBar from './MainSearchBar';
import SignupComplete from './SignupComplete';
import SignupStep1 from './SignupStep1';
import SignupStep2 from './SignupStep2';

function Main() {
  return (
    <Routes>
      <Route index element={<MainSearchBar />} />
      <Route path="signupStep1" element={<SignupStep1 />} />
      <Route path="signupStep2/:token" element={<SignupStep2 />} />
      <Route path="signupComplete" element={<SignupComplete />} />
      <Route path="getUserInfo/:token/:rToken" element={<GetUserInfo />} />
      <Route path="kakaoCallback" element={<KakaoCallback />} />
      <Route path="logOut" element={<LogOut />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default Main;

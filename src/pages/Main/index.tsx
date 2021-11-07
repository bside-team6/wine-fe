import { Route, Routes } from 'react-router-dom';
import KakaoCallback from './Auth/KakaoCallback';
import LogOut from './Auth/LogOut';
import SignupStep1 from './Auth/SignupStep1';
import SignupStep2 from './Auth/SignupStep2';
import MainSearchBar from './MainSearchBar';

// FIXME: 반영 후 developers 에서 주소 변경
function Main() {
  return (
    <Routes>
      <Route index element={<MainSearchBar />} />
      <Route path="signup">
        <Route path="step1" element={<SignupStep1 />} />
        <Route path="step2" element={<SignupStep2 />} />
        <Route path="callback" element={<KakaoCallback />} />
      </Route>
      <Route path="logout" element={<LogOut />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default Main;

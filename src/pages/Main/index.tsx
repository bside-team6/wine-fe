import { Route, Routes } from 'react-router-dom';
import { GuestOnlyLayout } from '~/components/route/GuestOnly';
import KakaoCallback from './Auth/KakaoCallback';
import SignupStep1 from './Auth/SignupStep1';
import SignupStep2 from './Auth/SignupStep2';
import MainSearchBar from './MainSearchBar';

// FIXME: 반영 후 developers 에서 주소 변경
function Main() {
  return (
    <Routes>
      <Route index element={<MainSearchBar />} />
      <Route path="signup" element={<GuestOnlyLayout />}>
        <Route path="step1" element={<SignupStep1 />} />
        <Route path="step2" element={<SignupStep2 />} />
        <Route path="callback" element={<KakaoCallback />} />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default Main;

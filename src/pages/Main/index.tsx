import { Route, Routes } from 'react-router-dom';
import { GuestOnlyLayout } from '~/components/route/GuestOnly';
import KakaoCallback from './Auth/KakaoCallback';
import SignupStep1 from './Auth/SignupStep1';
import SignupStep2 from './Auth/SignupStep2';
import Home from './Home';

function Main() {
  return (
    <Routes>
      <Route index element={<Home />} />
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

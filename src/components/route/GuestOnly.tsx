import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAuthenticatedState } from '~/stores/auth';

export const GuestOnlyLayout = () => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  if (isAuthenticated) {
    // TODO: 비회원만 진입 가능 토스트 추가
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

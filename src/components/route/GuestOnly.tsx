import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';

export const GuestOnlyLayout = () => {
  const isAuthenticated = useAuth();

  if (isAuthenticated) {
    // TODO: 비회원만 진입 가능 토스트 추가
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

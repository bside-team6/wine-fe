import { Navigate, Outlet } from 'react-router-dom';
import useUserInfoQuery from '~/queries/useUserInfoQuery';
import { USER_ROLE } from '~/types';

export const AdminOnlyLayout = () => {
  const { data, isLoading } = useUserInfoQuery();

  if (isLoading) {
    return null;
  }

  if (data?.role !== USER_ROLE.ADMIN) {
    // TODO: 관리자만 진입 가능 토스트 추가
    return <Navigate to="/signup/step1" />;
  }

  return <Outlet />;
};

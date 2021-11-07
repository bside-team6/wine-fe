import { useLayoutEffect } from 'react';
import { Navigate } from 'react-router-dom';

function LogOut() {
  useLayoutEffect(() => {
    // TODO: 전역 및 localStorage 에서 데이터 삭제
  }, []);

  return <Navigate to="/" replace />;
}

export default LogOut;

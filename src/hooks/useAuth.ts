import { useRecoilValue } from 'recoil';
import { isAuthenticatedState } from '~/stores/auth';

/**
 * 로그인 여부를 반환하는 훅
 * @example
 *   const isAuthenticated = useAuth();
 */
const useAuth = () => {
  return useRecoilValue(isAuthenticatedState);
};

export default useAuth;

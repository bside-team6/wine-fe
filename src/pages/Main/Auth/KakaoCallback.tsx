import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import useKakaoTokenQuery from '~/queries/useKakaoTokenQuery';
import useLoginMutation from '~/queries/useLoginMutation';
import useUserInfoQuery from '~/queries/useUserInfoQuery';
import { isAuthenticatedState } from '~/stores/auth';

function KakaoCallback() {
  const navigate = useNavigate();

  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

  const { refetch: fetchUserInfo } = useUserInfoQuery({
    onSuccess: (user) => setIsAuthenticated(user.id !== null),
  });

  const { mutate: login } = useLoginMutation({
    onSuccess: () => fetchUserInfo(), // 기존 회원인 경우 유저 정보 불러옴,
    onError: (error) => {
      // FIXME: 임시 코드 처리 (이후 400은 삭제)
      if (error.response?.status === 400 || error.response?.status === 401) {
        // 신규유저면 닉네임 등록 페이지로
        navigate('/signup/step2', { replace: true });
      }
    },
  });

  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useKakaoTokenQuery(code!, {
    onSuccess: ({ access_token }) => {
      // 사용자 정보 가져오기 등 카카오 API를 호출하려면 토큰값 세팅 필요
      // 로그인 이외의 카카오 API를 JavaScript SDK로 호출하려면 토큰 할당 필요
      window.Kakao?.Auth?.setAccessToken(access_token);
      login(access_token);
    },
  });

  return null;
}

export default KakaoCallback;

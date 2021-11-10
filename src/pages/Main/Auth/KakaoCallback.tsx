import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { setAccessToken, setRefreshToken } from '~/helpers/auth';
import useKakao from '~/hooks/useKakao';
import useKakaoTokenQuery from '~/queries/useKakaoTokenQuery';
import useLoginMutation from '~/queries/useLoginMutation';
import useUserInfoQuery from '~/queries/useUserInfoQuery';
import { isAuthenticatedState } from '~/stores/auth';

function KakaoCallback() {
  useKakao();

  const navigate = useNavigate();

  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

  const { refetch: fetchUserInfo } = useUserInfoQuery({
    enabled: false,
    onSuccess: () => {
      setIsAuthenticated(true);
      navigate('/', { replace: true });
    },
    onError: () => {
      // TODO: 로그인성공 직후 세팅했던 와인이지 토큰 삭제
    },
  });

  const { mutate: kakaoSignIn } = useLoginMutation({
    onSuccess: ({ accessToken, refreshToken }) => {
      // TODO: refreshToken의 만료기간도 같이 기록하고 앱 시작시 만료되었으면 삭제

      // accessToken은 axios에 세팅하고 refreshToken은 localStorage에 세팅한다
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      // 기존 회원인 경우 유저 정보 불러옴
      fetchUserInfo();
    },
    onError: (error) => {
      if (error.response?.status === 401) {
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
      kakaoSignIn(access_token);
    },
  });

  return null;
}

export default KakaoCallback;

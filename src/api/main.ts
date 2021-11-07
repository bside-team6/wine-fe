import instance, { kakaoAuth } from './instance';
import { KAKAO_REST_APP_KEY, REDIRECT_URI } from '~/helpers/auth';
import type {
  AccessToken,
  IResponse,
  KakaoToken,
  RefreshedKakaoToken,
  UserInfo,
} from '~/types';

/**
 * POST 회원가입
 * @description 카카오로 회원가입
 * @param kakaoAccessToken 카카오 accessToken
 */
export const postKakaoSignUp = async (kakaoAccessToken: string) => {
  const { data } = await instance.post<IResponse<AccessToken>>(
    '/sign-up/kakao',
    undefined,
    {
      headers: {
        Authorization: kakaoAccessToken,
      },
    },
  );
  return data.data;
};

/**
 * GET 본인 정보 불러오기
 */
export const getUserInfo = async () => {
  // TODO: user/info 로 변경 요청
  const { data } = await instance.get<IResponse<UserInfo>>('/user-info');
  return data;
};

/**
 * POST 와인이지 AccessToken 재발급
 */
export const postRefreshAccessToken = async (refreshToken: string) => {
  // TODO: accessToken/renew 로 변경 요청
  const { data } = await instance.post('/renew-accessToken', undefined, {
    headers: {
      RefreshToken: refreshToken,
    },
  });
  return data;
};

/**
 * POST 닉네임 등록
 */
export const postRegisterNickName = async (nickName: string) => {
  await instance.post('/sign-up/nick-name', {
    nickName,
  });
};

/**
 * POST 인가코드로 토큰받기
 * @param code 카카오 인가코드
 * @returns 카카오 accessToken 및 refreshToken
 */
export const getKakaoToken = async (code: string) => {
  const { data } = await kakaoAuth.post<KakaoToken>(`/oauth/token`, undefined, {
    params: {
      grant_type: 'authorization_code',
      client_id: KAKAO_REST_APP_KEY,
      redirect_uri: decodeURI(REDIRECT_URI),
      code,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });
  return data;
};

/**
 * POST 카카오 accessToken 갱신
 * @param refreshToken 카카오 refreshToken
 * @returns 카카오 accessToken 및 refreshToken
 */
export const refreshKakaoToken = async (refreshToken: string) => {
  const { data } = await kakaoAuth.post<RefreshedKakaoToken>(
    `/oauth/token`,
    undefined,
    {
      params: {
        grant_type: 'refresh_token',
        client_id: KAKAO_REST_APP_KEY,
        refresh_token: refreshToken,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    },
  );
  return data;
};

/**
 * GET 간편검색
 */
export const getWineSearch = async (param: any) => {
  console.log('param &&&&& :', param.queryKey[1]);
  const { data } = await instance.get('/v1/simple-search', {
    params: param.queryKey[1],
  });
  return data;
};

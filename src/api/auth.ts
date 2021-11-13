import { API_URL } from '~/api/urls';
import { KAKAO_REST_APP_KEY, REDIRECT_URI } from '~/helpers/auth';
import type {
  KakaoToken,
  NickNameValidate,
  RefreshedKakaoToken,
  SignupRequest,
  UserInfo,
} from '~/types';
import instance, { kakaoAuth } from './instance';

/**
 * POST 로그인
 * @description 카카오토큰으로 로그인
 * @param kakaoAccessToken 카카오 accessToken
 */
export const login = async (kakaoAccessToken: string) =>
  instance.post(API_URL.LOGIN, {
    kakaoAccessToken,
  });

/**
 * POST 로그아웃
 */
export const logout = async () => instance.post(API_URL.LOGOUT);

/**
 * POST 회원가입
 * @description 카카오로 회원가입
 * @param kakaoAccessToken 카카오 accessToken
 * @param nickName 닉네임
 */
export const signupByKakao = async ({
  kakaoAccessToken,
  nickName,
}: SignupRequest) =>
  instance.post(API_URL.SIGNUP, {
    kakaoAccessToken,
    nickName,
  });

/**
 * GET 닉네임 중복검사
 * @param nickName
 */
export const validateNickname = async (nickName: string) => {
  const { data } = await instance.get<NickNameValidate>(
    API_URL.VALIDATE_NICKNAME,
    {
      params: {
        nickName,
      },
    },
  );
  return data;
};

/**
 * GET 본인 정보 불러오기
 */
export const getUserInfo = async ({ signal }: { signal?: AbortSignal }) => {
  const { data } = await instance.get<UserInfo | null>(API_URL.USER_INFO, {
    signal,
  });
  return data;
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

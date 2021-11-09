import { rest } from 'msw';
import { API_URL } from '~/api/urls';
import { createErrorHandler, createMswHandler } from '~/helpers/msw';
import type { AccessToken, NickNameValidate } from '~/types';

export const loginSuccessHandler = createMswHandler<AccessToken>(
  API_URL.LOGIN,
  'post',
  {
    accessToken: 'login-access-token',
    refreshToken: 'login-refresh-token',
  },
  'real',
);

// 카카오토큰으로 로그인 시도했을때 와인이지 회원이 아닌 경우
export const loginErrorHandler = createErrorHandler(
  API_URL.LOGIN,
  'post',
  401,
  'real',
);

export const signupSuccessHandler = createMswHandler<AccessToken>(
  API_URL.SIGNUP,
  'post',
  {
    accessToken: 'signup-access-token',
    refreshToken: 'signup-refresh-token',
  },
  'real',
);

// 중복회원
export const signupErrorHandler = createErrorHandler(
  API_URL.SIGNUP,
  'post',
  409,
  'real',
);

export const refreshTokenSuccessHandler = createMswHandler(
  API_URL.REFRESH_ACCESS_TOKEN,
  'post',
  'new-access-token',
  'real',
);

export const nicknameValidateHandler = rest.get(
  API_URL.VALIDATE_NICKNAME,
  (req, res, ctx) => {
    const nickName = req.url.searchParams.get('nickName');
    return res(
      ctx.json<NickNameValidate>({
        isPresent: ['어드민', '와인이지', '관리자'].includes(nickName || ''),
      }),
    );
  },
);

import { rest } from 'msw';
import { API_URL } from '~/api/urls';
import {
  createErrorHandler,
  createMswHandler,
  delayedResponse,
} from '~/helpers/msw';
import {
  NickNameValidate,
  NonUser,
  SignupRequest,
  User,
  USER_ROLE,
} from '~/types';

export const loginSuccessHandler = createMswHandler(
  API_URL.LOGIN,
  'post',
  undefined,
  'real',
);

// 카카오토큰으로 로그인 시도했을때 와인이지 회원이 아닌 경우
export const loginErrorHandler = createErrorHandler(
  API_URL.LOGIN,
  'post',
  401,
  'real',
);

let nickName: string | undefined = undefined;

export const signupSuccessHandler = rest.post<SignupRequest>(
  API_URL.SIGNUP,
  (req, res, ctx) => {
    nickName = req.body.nickName;
    return delayedResponse(ctx.status(204));
  },
);

// 중복회원
export const signupErrorHandler = createErrorHandler(
  API_URL.SIGNUP,
  'post',
  409,
  'real',
);

export const logoutSuccessHandler = rest.post<SignupRequest>(
  API_URL.LOGOUT,
  (req, res, ctx) => {
    nickName = undefined;
    return delayedResponse(ctx.status(204));
  },
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

export const userInfoHandler = rest.get(API_URL.USER_INFO, (req, res, ctx) => {
  if (nickName) {
    return delayedResponse(
      ctx.json<User>({
        id: 10000,
        name: '홍길동',
        email: 'aaa@test.com',
        nickName,
        profilePhotoURL: 'https://via.placeholder.com/150',
        role: USER_ROLE.NORMAL,
        uuid: 10000,
      }),
    );
  }
  return delayedResponse(
    ctx.json<NonUser>({
      id: null,
      name: null,
      email: null,
      nickName: null,
      profilePhotoURL: null,
      role: null,
      uuid: null,
    }),
  );
});

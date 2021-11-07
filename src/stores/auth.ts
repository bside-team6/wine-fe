import { atom } from 'recoil';

export const isAuthenticatedState = atom<boolean>({
  key: 'isAuthenticatedState',
  default: false, // TODO: 자동로그인 필요한 경우 localStorage & refreshToken & accessToken 갱신 필요
});

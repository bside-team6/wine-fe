import { atom } from 'recoil';

export const isAuthenticatedState = atom<boolean>({
  key: 'isAuthenticatedState',
  default: false,
});

import { setupWorker } from 'msw';
import {
  loginErrorHandler,
  logoutSuccessHandler,
  nicknameValidateHandler,
  signupSuccessHandler,
  userInfoHandler,
} from '~/api/mocks/auth';

export const worker = setupWorker(
  loginErrorHandler,
  signupSuccessHandler,
  nicknameValidateHandler,
  userInfoHandler,
  logoutSuccessHandler,
);

import { setupWorker } from 'msw';
import {
  loginErrorHandler,
  nicknameValidateHandler,
  refreshTokenSuccessHandler,
  signupSuccessHandler,
} from '~/api/mocks/auth';

export const worker = setupWorker(
  loginErrorHandler,
  signupSuccessHandler,
  refreshTokenSuccessHandler,
  nicknameValidateHandler,
);

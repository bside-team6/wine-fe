import { setupWorker } from 'msw';
import {
  loginSuccessHandler,
  nicknameValidateHandler,
  refreshTokenSuccessHandler,
  signupSuccessHandler,
} from '~/api/mocks/auth';

export const worker = setupWorker(
  loginSuccessHandler,
  signupSuccessHandler,
  refreshTokenSuccessHandler,
  nicknameValidateHandler,
);

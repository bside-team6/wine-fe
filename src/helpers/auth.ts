import { BASE_URL } from '~/helpers/constants';

export const KAKAO_JS_APP_KEY = 'b07e3bd4deb6d41600e9321957f9c37d';

export const KAKAO_REST_APP_KEY = '44f67b5c845a502ae83691fe08f261c2';

export const REDIRECT_URI = `${BASE_URL}/signup/callback`;

export const kakaoLogin = () =>
  window.Kakao?.Auth?.authorize({
    redirectUri: REDIRECT_URI,
  });

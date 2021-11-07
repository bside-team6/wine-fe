import instance from '~/api/instance';
import { BASE_URL } from '~/helpers/constants';

export const KAKAO_JS_APP_KEY = 'b07e3bd4deb6d41600e9321957f9c37d';

export const KAKAO_REST_APP_KEY = '44f67b5c845a502ae83691fe08f261c2';

export const REDIRECT_URI = `${BASE_URL}/signup/callback`;

export const setAccessToken = (accessToken: string) => {
  instance.defaults.headers.common['AccessToken'] = accessToken;
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);
};

export const getRefreshToken = () => localStorage.getItem('refreshToken');

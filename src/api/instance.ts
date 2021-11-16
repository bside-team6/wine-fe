import axios from 'axios';

const instance = axios.create();

export default instance;

export const kakaoAuth = axios.create({
  baseURL: 'https://kauth.kakao.com',
});

export const kakaoApi = axios.create({
  baseURL: 'https://kapi.kakao.com',
});

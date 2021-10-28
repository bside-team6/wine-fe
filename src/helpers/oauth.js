export const CLIENT_ID = '44f67b5c845a502ae83691fe08f261c2';
//export const REDIRECT_URI = 'http://localhost:3000/kakaoCallback';
export const REDIRECT_URI = 'http://ec2-54-180-133-23.ap-northeast-2.compute.amazonaws.com/kakaoCallback';
export const CLIENT_SECRET = 's2qXLlvYBdbWxNkWxEMXYg06AoENg93J';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const KAKAO_TOKEN_URL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&client_secret=${CLIENT_SECRET}`;

export const KAKAO_SIGNUP_URL = `http://ec2-54-180-133-23.ap-northeast-2.compute.amazonaws.com:8081/api/sign-up/kakao`;

export const NICKNAME_URL = `http://ec2-54-180-133-23.ap-northeast-2.compute.amazonaws.com:8081/api/sign-up/nick-name`;

export const RTOKEN_URL = `http://ec2-54-180-133-23.ap-northeast-2.compute.amazonaws.com:8081/api/renew-accessToken`;

export const USERINFO_URL = `http://ec2-54-180-133-23.ap-northeast-2.compute.amazonaws.com:8081/api/user-info`;
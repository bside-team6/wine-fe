const CLIENT_ID = "44f67b5c845a502ae83691fe08f261c2";
const REDIRECT_URI =  "http://localhost:3000/kakaoCallback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
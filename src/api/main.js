import instance from './instance';

/**
 * 회원가입
 */
export const kakaoSignUp = async (kakaoAccessToken) => {
  const { data } = await instance.get('/sign-up/kakao', {
    params: {
      kakaoAccessToken,
    },
  });
  return data;
};

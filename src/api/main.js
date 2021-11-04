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

/**
 * GET 간편검색
 */
export const getWineSearch = async (param) => {
  console.log('param &&&&& :', param.queryKey[1]);
  const { data } = await instance.get('/v1/simple-search', {
    params: param.queryKey[1],
  });
  return data;
};

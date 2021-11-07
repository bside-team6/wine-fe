import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getKakaoToken } from '~/api/main';
import type { KakaoToken, QueryOptions } from '~/types';

const useKakaoTokenQuery = (
  code: string,
  options?: QueryOptions<KakaoToken>,
) => {
  return useQuery<KakaoToken, AxiosError>(
    ['kakao-token', code],
    () => getKakaoToken(code),
    {
      select: (data) => data,
      ...options,
    },
  );
};

export default useKakaoTokenQuery;

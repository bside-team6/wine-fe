import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getUserInfo } from '~/api/auth';
import type { IResponse, QueryOptions, UserInfo } from '~/types';

const useUserInfoQuery = (
  options?: QueryOptions<
    IResponse<UserInfo | null>,
    AxiosError,
    UserInfo | null
  >,
) => {
  return useQuery<IResponse<UserInfo | null>, AxiosError, UserInfo | null>(
    'user-info',
    getUserInfo,
    {
      enabled: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      ...options,
    },
  );
};

export default useUserInfoQuery;

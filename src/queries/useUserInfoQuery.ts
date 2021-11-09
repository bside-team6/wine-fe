import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getUserInfo } from '~/api/auth';
import type { IResponse, QueryOptions, UserInfo } from '~/types';

const useUserInfoQuery = (
  options?: QueryOptions<IResponse<UserInfo>, AxiosError, UserInfo>,
) => {
  return useQuery<IResponse<UserInfo>, AxiosError, UserInfo>(
    'user-info',
    getUserInfo,
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      ...options,
    },
  );
};

export default useUserInfoQuery;

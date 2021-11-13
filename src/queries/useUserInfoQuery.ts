import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getUserInfo } from '~/api/auth';
import type { QueryOptions, UserInfo } from '~/types';

const useUserInfoQuery = (
  options?: QueryOptions<UserInfo | null, AxiosError>,
) => {
  return useQuery<UserInfo | null, AxiosError>('user-info', getUserInfo, {
    enabled: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    ...options,
  });
};

export default useUserInfoQuery;

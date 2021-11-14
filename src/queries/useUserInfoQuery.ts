import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getUserInfo } from '~/api/auth';
import type { NonUser, QueryOptions, User } from '~/types';

const useUserInfoQuery = (
  options?: QueryOptions<User | NonUser, AxiosError>,
) => {
  return useQuery<User | NonUser, AxiosError>('user-info', getUserInfo, {
    enabled: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    ...options,
  });
};

export default useUserInfoQuery;

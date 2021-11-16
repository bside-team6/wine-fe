import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getUserInfo } from '~/api/auth';
import type { INonUser, IUser, QueryOptions } from '~/types';

const useUserInfoQuery = (
  options?: QueryOptions<IUser | INonUser, AxiosError>,
) => {
  return useQuery<IUser | INonUser, AxiosError>('user-info', getUserInfo, {
    enabled: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    ...options,
  });
};

export default useUserInfoQuery;

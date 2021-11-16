import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getFoods } from '~/api/main';
import type { Food, QueryOptions } from '~/types';

const useFoodsQuery = (options?: QueryOptions<Food[], AxiosError>) => {
  return useQuery<Food[], AxiosError>('foods', getFoods, {
    staleTime: Infinity,
    cacheTime: Infinity,
    ...options,
  });
};

export default useFoodsQuery;

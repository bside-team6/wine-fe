import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getFoods } from '~/api/wine';
import type { IFood, QueryOptions } from '~/types';

const useFoodsQuery = (options?: QueryOptions<IFood[], AxiosError>) => {
  return useQuery<IFood[], AxiosError>('foods', getFoods, {
    staleTime: Infinity,
    cacheTime: Infinity,
    ...options,
  });
};

export default useFoodsQuery;

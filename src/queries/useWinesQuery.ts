import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getWines } from '~/api/wine';
import type { IPageable, IWine, QueryOptions, WinesRequest } from '~/types';

const useWinesQuery = (
  params: WinesRequest,
  options?: QueryOptions<IPageable<IWine>, AxiosError>,
) => {
  return useQuery<IPageable<IWine>, AxiosError>(
    ['wine-search', params],
    () => getWines(params),
    {
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default useWinesQuery;

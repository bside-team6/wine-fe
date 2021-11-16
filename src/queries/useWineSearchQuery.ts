import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getWineSearch } from '~/api/main';
import type { QueryOptions, SimpleSearchRequest, WineSummary } from '~/types';

const useWineSearchQuery = (
  params: SimpleSearchRequest,
  options?: QueryOptions<WineSummary[], AxiosError>,
) => {
  return useQuery<WineSummary[], AxiosError>(
    ['wine-search', params],
    () => getWineSearch(params),
    {
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default useWineSearchQuery;

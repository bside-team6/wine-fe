import { useQuery } from 'react-query';
import { getWineSearch } from '~/api/main';

const useWineSearchQuery = (options, params) => {
  return useQuery(['wine-search', params], getWineSearch, {
    staleTime: 1000 * 60 * 5, // 5min
    ...options,
  });
};

export default useWineSearchQuery;

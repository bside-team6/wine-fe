import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getWine } from '~/api/wine';
import type { IWineDetail, QueryOptions } from '~/types';

const useWineQuery = (
  wineId: number,
  options?: QueryOptions<IWineDetail, AxiosError>,
) => {
  return useQuery<IWineDetail, AxiosError>(
    ['wine', wineId],
    () => getWine(wineId),
    {
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default useWineQuery;

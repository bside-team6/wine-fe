import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getWineNote } from '~/api/wine-note';
import type { IWineNoteDetail, QueryOptions } from '~/types';

const useWineNoteQuery = (
  wineNoteId: number,
  options?: QueryOptions<IWineNoteDetail, AxiosError>,
) => {
  return useQuery<IWineNoteDetail, AxiosError>(
    ['wine-note', wineNoteId],
    () => getWineNote(wineNoteId),
    {
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default useWineNoteQuery;

import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getWineNote } from '~/api/wine-note';
import type { IWineNoteDetail, QueryOptions } from '~/types';

interface QueryProps {
  wineNoteId: number;
  isTimeline?: boolean;
}

const useWineNoteQuery = (
  { wineNoteId, isTimeline = false }: QueryProps,
  options?: QueryOptions<IWineNoteDetail, AxiosError>,
) => {
  return useQuery<IWineNoteDetail, AxiosError>(
    ['wine-note', wineNoteId, isTimeline],
    () => getWineNote(wineNoteId, isTimeline),
    {
      staleTime: 1000 * 60 * 5, // 5min
      suspense: true,
      ...options,
    },
  );
};

export default useWineNoteQuery;

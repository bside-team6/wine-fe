import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getWineNotes } from '~/api/wine-note';
import type { IPageable, IWineNote, QueryOptions } from '~/types';

interface QueryProps {
  wineId: number;
  page: number;
}

const useWineNotesByWineIdQuery = (
  { wineId, page }: QueryProps,
  options?: QueryOptions<IPageable<IWineNote>, AxiosError>,
) => {
  return useQuery<IPageable<IWineNote>, AxiosError>(
    ['wine-notes-by-wine-id', wineId, page],
    () =>
      getWineNotes({
        wineId,
        page,
        isTimeline: false,
        size: 5,
      }),
    {
      staleTime: 1000 * 60 * 5, // 5min
      suspense: true,
      ...options,
    },
  );
};

export default useWineNotesByWineIdQuery;

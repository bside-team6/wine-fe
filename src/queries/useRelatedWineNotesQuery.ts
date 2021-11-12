import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getRelatedWineNotes } from '~/api/wine-note';
import type { IRelatedWineNote, QueryOptions } from '~/types';

const useRelatedWineNotesQuery = (
  wineNoteId: number,
  options?: QueryOptions<IRelatedWineNote[], AxiosError>,
) => {
  return useQuery<IRelatedWineNote[], AxiosError>(
    ['popular-wine-notes', wineNoteId],
    () => getRelatedWineNotes(wineNoteId),
    {
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default useRelatedWineNotesQuery;

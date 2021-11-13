import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getRelatedWineNotes } from '~/api/wine-note';
import type { IWineNote, QueryOptions } from '~/types';

const useRelatedWineNotesQuery = (
  wineNoteId: number,
  options?: QueryOptions<IWineNote[], AxiosError>,
) => {
  return useQuery<IWineNote[], AxiosError>(
    ['related-wine-notes', wineNoteId],
    () => getRelatedWineNotes(wineNoteId),
    {
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default useRelatedWineNotesQuery;

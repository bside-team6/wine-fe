import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getPopularWineNotes } from '~/api/wine-note';
import type { IWineNoteDetail, QueryOptions } from '~/types';

const usePopularWineNotesQuery = (
  options?: QueryOptions<IWineNoteDetail[], AxiosError>,
) => {
  return useQuery<IWineNoteDetail[], AxiosError>(
    'popular-wine-notes',
    getPopularWineNotes,
    {
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default usePopularWineNotesQuery;

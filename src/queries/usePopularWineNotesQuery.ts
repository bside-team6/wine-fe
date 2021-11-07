import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getPopularWineNotes } from '~/api/wine-note';
import type { IResponse, IWineNoteDetail, QueryOptions } from '~/types';

const usePopularWineNotesQuery = (
  options?: QueryOptions<
    IResponse<IWineNoteDetail[]>,
    AxiosError,
    IWineNoteDetail[]
  >,
) => {
  return useQuery<IResponse<IWineNoteDetail[]>, AxiosError, IWineNoteDetail[]>(
    'popular-wine-notes',
    getPopularWineNotes,
    {
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default usePopularWineNotesQuery;

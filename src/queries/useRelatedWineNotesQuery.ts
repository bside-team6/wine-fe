import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getRelatedWineNotes } from '~/api/wine-note';
import type { IRelatedWineNote, IResponse, QueryOptions } from '~/types';

const useRelatedWineNotesQuery = (
  wineNoteId: number,
  options?: QueryOptions<
    IResponse<IRelatedWineNote[]>,
    AxiosError,
    IRelatedWineNote[]
  >,
) => {
  return useQuery<
    IResponse<IRelatedWineNote[]>,
    AxiosError,
    IRelatedWineNote[]
  >(['popular-wine-notes', wineNoteId], () => getRelatedWineNotes(wineNoteId), {
    staleTime: 1000 * 60 * 5, // 5min
    ...options,
  });
};

export default useRelatedWineNotesQuery;

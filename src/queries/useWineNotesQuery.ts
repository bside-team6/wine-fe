import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getWineNotes } from '~/api/wine-note';
import type { IResponse, ITimelineWineNoteList, QueryOptions } from '~/types';

const useWineNotesQuery = (
  options?: QueryOptions<
    IResponse<ITimelineWineNoteList>,
    AxiosError,
    ITimelineWineNoteList
  >,
) => {
  return useQuery<
    IResponse<ITimelineWineNoteList>,
    AxiosError,
    ITimelineWineNoteList
  >('wine-notes', getWineNotes, {
    staleTime: 1000 * 60 * 5, // 5min
    ...options,
  });
};

export default useWineNotesQuery;

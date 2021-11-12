import type { AxiosError } from 'axios';
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';
import { getWineNotes } from '~/api/wine-note';
import type { IResponse, ITimelineWineNoteList } from '~/types';

const useWineNotesQuery = (
  options?: UseInfiniteQueryOptions<
    IResponse<ITimelineWineNoteList>,
    AxiosError,
    IResponse<ITimelineWineNoteList>
  >,
) => {
  return useInfiniteQuery<
    IResponse<ITimelineWineNoteList>,
    AxiosError,
    IResponse<ITimelineWineNoteList>
  >('wine-notes', getWineNotes, {
    select: (data) => data,
    getNextPageParam: ({ data }) => {
      const { currentPage, totalPages } = data;
      return currentPage + 1 === totalPages ? false : currentPage + 1;
    },
    staleTime: 1000 * 60 * 5, // 5min
    ...options,
  });
};

export default useWineNotesQuery;

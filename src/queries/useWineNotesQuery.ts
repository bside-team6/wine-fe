import type { AxiosError } from 'axios';
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';
import { getWineNotes } from '~/api/wine-note';
import type { ITimelineWineNoteList } from '~/types';

const useWineNotesQuery = (
  options?: UseInfiniteQueryOptions<ITimelineWineNoteList, AxiosError>,
) => {
  return useInfiniteQuery<ITimelineWineNoteList, AxiosError>(
    'wine-notes',
    getWineNotes,
    {
      getNextPageParam: (data) => (data.last ? false : data.number + 1),
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default useWineNotesQuery;

import type { AxiosError } from 'axios';
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';
import { getWineNoteTimeline } from '~/api/wine-note';
import type { IPageable, IWineNote } from '~/types';

const useWineNoteTimelineQuery = (
  options?: UseInfiniteQueryOptions<IPageable<IWineNote>, AxiosError>,
) => {
  return useInfiniteQuery<IPageable<IWineNote>, AxiosError>(
    'wine-note-timeline',
    getWineNoteTimeline,
    {
      getNextPageParam: (data) => (data.last ? false : data.number + 1),
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default useWineNoteTimelineQuery;

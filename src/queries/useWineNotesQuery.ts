import type { AxiosError } from 'axios';
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';
import { getWineNotes } from '~/api/wine-note';
import type { IPageable, IWineNote } from '~/types';

interface QueryProps {
  isTimeline?: boolean;
  size?: number;
}

const useWineNotesQuery = (
  { isTimeline = false, size }: QueryProps,
  options?: UseInfiniteQueryOptions<IPageable<IWineNote>, AxiosError>,
) => {
  return useInfiniteQuery<IPageable<IWineNote>, AxiosError>(
    ['wine-notes', isTimeline, size],
    ({ pageParam }) =>
      getWineNotes({
        page: pageParam,
        isTimeline,
        size,
      }),
    {
      getNextPageParam: (data) => (data.last ? false : data.number + 1),
      staleTime: 1000 * 60 * 5, // 5min
      suspense: true,
      ...options,
    },
  );
};

export default useWineNotesQuery;

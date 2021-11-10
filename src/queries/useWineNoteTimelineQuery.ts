import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getWineNoteTimeline } from '~/api/wine-note';
import type { IResponse, ITimelineWineNoteList, QueryOptions } from '~/types';

const useWineNoteTimelineQuery = (
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
  >('wine-note-timeline', getWineNoteTimeline, {
    staleTime: 1000 * 60 * 5, // 5min
    ...options,
  });
};

export default useWineNoteTimelineQuery;

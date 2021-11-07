import type { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getWineNoteTimelineDetail } from '~/api/wine-note';
import type { IResponse, IWineNoteDetail, QueryOptions } from '~/types';

const useWineNoteTimelineDetailQuery = (
  wineNoteId: number,
  options?: QueryOptions<
    IResponse<IWineNoteDetail>,
    AxiosError,
    IWineNoteDetail
  >,
) => {
  return useQuery<IResponse<IWineNoteDetail>, AxiosError, IWineNoteDetail>(
    ['wine-note-timeline', wineNoteId],
    () => getWineNoteTimelineDetail(wineNoteId),
    {
      staleTime: 1000 * 60 * 5, // 5min
      ...options,
    },
  );
};

export default useWineNoteTimelineDetailQuery;

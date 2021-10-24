import { useQuery } from 'react-query';
import { getWineNoteTimeline } from 'api/wine-note';

const useWineNoteTimelineQuery = (options) => {
  return useQuery('wine-note-timeline', getWineNoteTimeline, {
    staleTime: 1000 * 60 * 5, // 5min
    ...options,
  });
};

export default useWineNoteTimelineQuery;

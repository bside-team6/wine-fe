import { useQuery } from 'react-query';
import { getPopularWineNotes } from 'api/wine-note';

const usePopularWineNotesQuery = (options) => {
  return useQuery('popular-wine-notes', getPopularWineNotes, {
    staleTime: 1000 * 60 * 5, // 5min
    ...options,
  });
};

export default usePopularWineNotesQuery;

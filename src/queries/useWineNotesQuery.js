import { useQuery } from 'react-query';
import { getWineNotes } from 'api/wine-note';

const useWineNotesQuery = (options) => {
  return useQuery('wine-notes', getWineNotes, {
    staleTime: 1000 * 60 * 5, // 5min
    ...options,
  });
};

export default useWineNotesQuery;

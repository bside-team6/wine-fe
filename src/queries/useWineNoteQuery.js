import { useQuery } from 'react-query';
import { getWineNote } from 'api/wine-note';

const useWineNoteQuery = (wineNoteId, options) => {
  return useQuery(['wine-note', wineNoteId], () => getWineNote(wineNoteId), {
    staleTime: 1000 * 60 * 5, // 5min
    ...options,
  });
};

export default useWineNoteQuery;

import type { AxiosError } from 'axios';
import { produce } from 'immer';
import { InfiniteData, useMutation, useQueryClient } from 'react-query';
import { toggleWineNoteLike } from '~/api/wine-note';
import type {
  IPageable,
  IWineNote,
  IWineNoteDetail,
  MutationOptions,
} from '~/types';

const useWineNoteLikeMutation = (
  options?: MutationOptions<unknown, AxiosError, number>,
) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, number>(toggleWineNoteLike, {
    ...options,
    onMutate: (wineNoteId) => {
      // Optimistic Updates

      // 와인노트 목록 `isLike` 토글
      queryClient.setQueriesData<InfiniteData<IPageable<IWineNote>>>(
        ['wine-notes'],
        produce((draft) => {
          if (draft?.pages?.length) {
            for (let i = 0; i < draft.pages.length; i++) {
              const idx = draft.pages[i].content.findIndex(
                (note) => note.id === wineNoteId,
              );
              if (idx !== -1) {
                draft.pages[i].content[idx].isLike =
                  !draft.pages[i].content[idx].isLike;
              }
            }
          }
        }),
      );
      // 상세와인노트 `isLike` 토글
      queryClient.setQueriesData<IWineNoteDetail>(
        ['wine-note'],
        produce((draft) => {
          if (draft?.id === wineNoteId) {
            draft.isLike = !draft.isLike;
          }
        }),
      );
      // 관련와인노트 `isLike` 토글
      queryClient.setQueryData<IWineNote[]>(
        ['related-wine-notes'],
        produce((draft) => {
          const idx = draft?.findIndex((note) => note.id === wineNoteId);
          if (draft && idx && idx !== -1) {
            draft[idx].isLike = !draft[idx].isLike;
          }
        }),
      );
    },
  });
};

export default useWineNoteLikeMutation;

import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { toggleWineNoteLike } from '~/api/wine-note';
import type { MutationOptions } from '~/types';

const useWineNoteLikeMutation = (
  options?: MutationOptions<unknown, AxiosError, number>,
) => {
  // const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, number>(toggleWineNoteLike, {
    ...options,
    onMutate: (wineNoteId) => {
      // Optimistic Updates
      // queryClient.setQueryData('todos', old => [...old, newTodo])
    },
  });
};

export default useWineNoteLikeMutation;

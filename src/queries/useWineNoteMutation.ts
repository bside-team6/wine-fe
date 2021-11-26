import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { postWineNote } from '~/api/wine-note';
import type { MutationOptions, WineNoteRequest } from '~/types';

const useWineNoteMutation = (
  options?: MutationOptions<unknown, AxiosError, WineNoteRequest>,
) => {
  return useMutation<unknown, AxiosError, WineNoteRequest>(
    postWineNote,
    options,
  );
};

export default useWineNoteMutation;

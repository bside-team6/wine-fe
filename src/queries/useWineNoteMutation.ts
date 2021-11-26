import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { postWineNote } from '~/api/wine-note';
import type {
  MutationOptions,
  WineNoteRequest,
  WineNoteResponse,
} from '~/types';

const useWineNoteMutation = (
  options?: MutationOptions<WineNoteResponse, AxiosError, WineNoteRequest>,
) => {
  return useMutation<WineNoteResponse, AxiosError, WineNoteRequest>(
    postWineNote,
    options,
  );
};

export default useWineNoteMutation;

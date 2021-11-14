import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { toggleWineNotePublic } from '~/api/wine-note';
import type { MutationOptions } from '~/types';

const useWineNotePublicMutation = (
  options?: MutationOptions<unknown, AxiosError, number>,
) => {
  return useMutation<unknown, AxiosError, number>(
    toggleWineNotePublic,
    options,
  );
};

export default useWineNotePublicMutation;

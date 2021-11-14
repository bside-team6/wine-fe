import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { toggleWineNoteFitsMe } from '~/api/wine-note';
import type { MutationOptions } from '~/types';

const useWineNoteFitsMeMutation = (
  options?: MutationOptions<unknown, AxiosError, number>,
) => {
  return useMutation<unknown, AxiosError, number>(
    toggleWineNoteFitsMe,
    options,
  );
};

export default useWineNoteFitsMeMutation;

import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { login } from '~/api/auth';
import type { MutationOptions } from '~/types';

const useLoginMutation = (
  options?: MutationOptions<unknown, AxiosError, string>,
) => {
  return useMutation<unknown, AxiosError, string>(login, options);
};

export default useLoginMutation;

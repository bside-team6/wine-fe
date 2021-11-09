import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { login } from '~/api/auth';
import type { AccessToken, MutationOptions } from '~/types';

const useLoginMutation = (
  options?: MutationOptions<AccessToken, AxiosError, string>,
) => {
  return useMutation<AccessToken, AxiosError, string>(login, options);
};

export default useLoginMutation;

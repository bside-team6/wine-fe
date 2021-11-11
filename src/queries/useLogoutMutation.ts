import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { logout } from '~/api/auth';
import type { MutationOptions } from '~/types';

const useLogoutMutation = (options?: MutationOptions<unknown, AxiosError>) => {
  return useMutation<unknown, AxiosError>(logout, options);
};

export default useLogoutMutation;

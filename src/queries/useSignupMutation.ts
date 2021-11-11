import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { signupByKakao } from '~/api/auth';
import type { MutationOptions, SignupRequest } from '~/types';

const useSignupMutation = (
  options?: MutationOptions<unknown, AxiosError, SignupRequest>,
) => {
  return useMutation<unknown, AxiosError, SignupRequest>(
    signupByKakao,
    options,
  );
};

export default useSignupMutation;

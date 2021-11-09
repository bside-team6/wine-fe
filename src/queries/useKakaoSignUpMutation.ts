import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { signUpByKakao } from '~/api/auth';
import type { AccessToken, MutationOptions, SignUpRequest } from '~/types';

const useKakaoSignUpMutation = (
  options?: MutationOptions<AccessToken, AxiosError, SignUpRequest>,
) => {
  return useMutation<AccessToken, AxiosError, SignUpRequest>(
    signUpByKakao,
    options,
  );
};

export default useKakaoSignUpMutation;

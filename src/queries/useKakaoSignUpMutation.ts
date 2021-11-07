import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { postKakaoSignUp } from '~/api/main';
import type { AccessToken, MutationOptions } from '~/types';

const useKakaoSignUpMutation = (
  options?: MutationOptions<AccessToken, AxiosError, string>,
) => {
  return useMutation<AccessToken, AxiosError, string>(postKakaoSignUp, options);
};

export default useKakaoSignUpMutation;

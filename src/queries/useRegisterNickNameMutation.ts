import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { postRegisterNickName } from '~/api/main';
import type { MutationOptions } from '~/types';

const useRegisterNickNameMutation = (
  options?: MutationOptions<void, AxiosError, string>,
) => {
  return useMutation<void, AxiosError, string>(postRegisterNickName, options);
};

export default useRegisterNickNameMutation;

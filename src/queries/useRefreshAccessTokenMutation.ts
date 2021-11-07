import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { postRefreshAccessToken } from '~/api/main';
import type { MutationOptions } from '~/types';

const useRefreshAccessTokenMutation = (
  options?: MutationOptions<any, AxiosError, string>,
) => {
  return useMutation<any, AxiosError, string>(postRefreshAccessToken, options);
};

export default useRefreshAccessTokenMutation;

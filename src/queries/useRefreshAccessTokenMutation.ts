import type { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { refreshAccessToken } from '~/api/auth';
import type { MutationOptions } from '~/types';

const useRefreshAccessTokenMutation = (
  options?: MutationOptions<string, AxiosError, string>,
) => {
  return useMutation<string, AxiosError, string>(refreshAccessToken, options);
};

export default useRefreshAccessTokenMutation;

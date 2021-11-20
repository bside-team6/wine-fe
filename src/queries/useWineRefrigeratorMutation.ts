import type { AxiosError } from 'axios';
import { produce } from 'immer';
import { useMutation, useQueryClient } from 'react-query';
import { postWineRefrigerator } from '~/api/refrigerator';
import type {
  IWineDetail,
  MutationOptions,
  RefrigeratorRequest,
} from '~/types';

const useWineRefrigeratorMutation = (
  options?: MutationOptions<unknown, AxiosError, RefrigeratorRequest>,
) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError, RefrigeratorRequest>(
    postWineRefrigerator,
    {
      ...options,
      onMutate: ({ wineId }) => {
        // 와인상세에서 냉장고 관련 변수 낙관적 업데이트
        queryClient.setQueryData<IWineDetail>(
          ['wine', wineId],
          produce((draft) => {
            if (draft) {
              draft.refrigeratedCount += 1;
              draft.isRefrigerated = true;
            }
          }),
        );
      },
    },
  );
};

export default useWineRefrigeratorMutation;

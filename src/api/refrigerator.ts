import { API_URL } from '~/api/urls';
import type { RefrigeratorRequest } from '~/types';
import instance from './instance';

/**
 * POST 와인 냉장고 등록
 */
export const postWineRefrigerator = async (data: RefrigeratorRequest) => {
  await instance.post(API_URL.REFRIGERATOR, data);
};

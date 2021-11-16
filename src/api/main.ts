import type { Food, SimpleSearchRequest, WineSummary } from '~/types';
import instance from './instance';

/**
 * GET 간편검색
 */
export const getWineSearch = async (params: SimpleSearchRequest) => {
  const { data } = await instance.get<WineSummary[]>('/api/v2/simple-search', {
    params,
  });
  return data;
};

/**
 * GET 음식명 목록 조회
 */
export const getFoods = async () => {
  const { data } = await instance.get<Food[]>(`/api/v2/food`);
  return data;
};

import type {
  IFood,
  IPageable,
  IWine,
  IWineDetail,
  WinesRequest,
} from '~/types';
import instance from './instance';

/**
 * GET 와인 목록 조회
 */
export const getWines = async (params: WinesRequest) => {
  const { data } = await instance.get<IPageable<IWine>>('/api/v2/wine', {
    params: {
      page: 0,
      size: 16,
      ...params,
      sort: params.sort ? params.sort.join(',') : undefined,
    },
  });
  return data;
};

/**
 * GET 와인 조회
 */
export const getWine = async (wineId: number) => {
  const { data } = await instance.get<IWineDetail>(`/api/v2/wine/${wineId}`);
  return data;
};

/**
 * GET 음식명 목록 조회
 */
export const getFoods = async () => {
  const { data } = await instance.get<IFood[]>(`/api/v2/food`);
  return data;
};

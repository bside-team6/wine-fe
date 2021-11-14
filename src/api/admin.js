import instance from './instance';

/**
 * GET 전체 와인 조회
 */
export const getAllWines = async (
  sort = 'nameKr,asc',
  size = 10,
  wineName,
  isPublic = true,
  page = 0,
) => {
  const { data } = await instance.get('/api/manager/v1/wine', {
    params: {
      sort,
      size,
      wineName,
      isPublic,
      page,
    },
  });
  return data;
};

/**
 * GET 와인 상세 조회
 */
export const getWine = async (wineId) => {
  const { data } = await instance.get(`/api/v1/wine/${wineId}`);
  return data;
};

/**
 * GET 와인 지역 목록 조회
 */
export const getWineRegions = async () => {
  const { data } = await instance.get(`/api/v1/wine-regions`);
  return data;
};

/**
 * GET 음식 조회
 */
export const getFood = async () => {
  const { data } = await instance.get(`/api/v1/food`);
  return data;
};

/**
 * GET 와인 xx 조회
 */
export const getWineVarieties = async () => {
  const { data } = await instance.get(`/api/v1/wine-varieties`);
  return data;
};

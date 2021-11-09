import instance from './instance';

/**
 * GET 간편검색
 */
export const getWineSearch = async (param: any) => {
  console.log('param &&&&& :', param.queryKey[1]);
  const { data } = await instance.get('/api/v1/simple-search', {
    params: param.queryKey[1],
  });
  return data;
};

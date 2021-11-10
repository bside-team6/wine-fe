import type { IResponse } from '~/types';

export const successResponse = <T>(data: T): IResponse<T> => ({
  result: true,
  message: '',
  data,
});

export const failureResponse = (data: unknown) => ({});

import type { AxiosError } from 'axios';
import type { QueryKey, UseQueryOptions } from 'react-query';

export type QueryOptions<
  TQueryFnData extends IResponse<unknown>,
  TError = AxiosError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'queryKey' | 'queryFn'
>;

export interface IResponse<T> {
  result: boolean;
  message: string;
  data: T;
}

export interface IPageable {
  totalPages: number;
  currentPage: number;
  totalElements: number;
}

export enum WINE_TYPE {
  CHAMPAGNE = 'CHAMPAGNE',
  FORTIFIED = 'FORTIFIED',
  RED = 'RED',
  ROSE = 'ROSE',
  SPARKLING = 'SPARKLING',
  SWEET = 'SWEET',
  WHITE = 'WHITE',
}

export interface IWineNoteBase {
  id: number;
  wineId: number;
  wineName: string;
  wineType: WINE_TYPE;
  /** @description int */
  sweet: number;
  /** @description float */
  score: number;
  price?: number;
  /** @example 2021-09-13 */
  drinkDate?: string;
  descript?: string;
  /** @example 2021-10-11T15:00:00 */
  regDate: string;
  /** @example 2021-10-11T15:00:00 */
  updateDate?: string;
  wineasyUserId: number;
  wineasyUserNickName: string;
  isLike: boolean;
  isPublic: boolean;
  viewCount: number;
  wineNoteLikeCount: number;
}

export interface ITimelineWineNote extends IWineNoteBase {
  wineNoteWineImagePath: string;
}

export interface ITimelineWineNoteList extends IPageable {
  wineNoteTimeLineResultList: ITimelineWineNote[];
}

export interface IWineNoteDetail extends IWineNoteBase {
  wineNoteFoodList: string[];
  wineNoteWineImages: {
    id: number;
    imagePath: string;
    imageName: string;
  }[];
  previousWineNoteId?: number;
  nextWineNoteId?: number;
}

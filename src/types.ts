import type { AxiosError } from 'axios';
import type {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from 'react-query';

export type QueryOptions<
  TQueryFnData = unknown,
  TError = AxiosError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'queryKey' | 'queryFn'
>;

export type MutationOptions<
  TData = unknown,
  TError = AxiosError,
  TVariables = void,
  TContext = unknown,
> = Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>;

export interface IPageable<T> {
  content: T[]; // 페이징 되는 item array
  empty: boolean; // pageable 객체가 빈 array 인가
  first: boolean; // 첫번째 페이지 여부
  last: boolean; // 마지막 페이지 여부
  number: number; // 현재 페이지 번호
  numberOfElements: number; // 실제 요소 개수
  size: number; // 페이지 크기
  totalElements: number; // 모든 페이지에 존재하는 총 요소 수
  totalPages: number; // 총 페이지 수
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

export interface IWineNote {
  id: number;
  wineId: number;
  wineName: string;
  wineType: WINE_TYPE;
  descript?: string;
  /** @example 2021-10-11T15:00:00 */
  regDate: string;
  userId: number;
  userNickName: string;
  isLike: boolean;
  isPublic: boolean;
  viewCount: number;
  likeCount: number;
  wineImages: {
    id: number;
    imagePath: string;
    imageName: string;
  }[];
}

export interface IWineNoteDetail extends IWineNote {
  /** @description int */
  sweet: number;
  /** @description float */
  score: number;
  price?: number;
  /** @example 2021-09-13 */
  drinkDate?: string;
  /** @example 2021-10-11T15:00:00 */
  updateDate?: string;
  isFitted: boolean;
  matchingFoods: string[];
  previousWineNoteId?: number;
  nextWineNoteId?: number;
}

export interface KakaoToken {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
}

export interface RefreshedKakaoToken {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  refresh_token_expires_in?: number;
}

export enum USER_ROLE {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN',
}

export interface User {
  id: number;
  name: string;
  email: string;
  nickName: string;
  profilePhotoURL: string;
  role: USER_ROLE;
  /** @description 유저 SNS 로그인 UUID */
  uuid: number;
}

export interface NonUser {
  id: null;
  name: null;
  email: null;
  nickName: null;
  profilePhotoURL: null;
  role: null;
  uuid: null;
}

export interface NickNameValidate {
  isPresent: boolean;
}

export interface SignupRequest {
  kakaoAccessToken: string;
  nickName: string;
}

export interface SimpleSearchRequest {
  count?: number; // 16
  foodId: number;
  keyword?: string;
  maxPrice?: number; // 10000000
  minPrice?: number; // 0
  orderBy?: string; // asc
  page?: number; // 1
  sortBy?: 'price' | 'sweet'; // price asc
}

export interface WineSummary {
  id: number;
  wineName: string;
  wineType: WINE_TYPE;
  sweet: number;
  scoreAverage: number; // 별점평균(float)
  scoreCount: number; // 별점개수(와인노트에 맵핑된 와인개수)
  price: number;
  matchingFoods: string[];
  isFridgeWine?: boolean; // 냉장고에 담은 와인
  drinkDate?: string; // 날짜(2021-09-13)
  wineImage: {
    id: number;
    imagePath: string;
    imageName: string;
  };
}

export interface Food {
  id: number;
  foodName: string;
}

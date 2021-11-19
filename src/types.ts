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
  /** @description float */
  score: number;
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

export interface IUser {
  id: number;
  name: string;
  email: string;
  nickName: string;
  profilePhotoURL: string;
  role: USER_ROLE;
  /** @description 유저 SNS 로그인 UUID */
  uuid: number;
}

export interface INonUser {
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

export interface WineNotesRequest {
  isTimeline: boolean;
  page: number;
  size?: number;
  wineId?: number;
}

export interface IPrice {
  id: number;
  label: string;
  minPrice?: number;
  maxPrice?: number;
}

export type ISort = ['score' | 'price' | 'sweet', 'ASC' | 'DESC'];

export interface WinesRequest {
  foodId?: number;
  /** @default 10_000_000 */
  maxPrice?: number;
  /** @default 0 */
  minPrice?: number;
  /** @example 0..N */
  page?: number;
  size?: number;
  sort?: ISort; // 기본: [score, DESC]
  wineName?: string;
  wineType?: WINE_TYPE;
}

export interface IWine {
  id: number;
  wineName: string;
  wineType: WINE_TYPE;
  /** @description 당도 (int) */
  sweet: number;
  /** @description 별점평균 (float) */
  scoreAverage: number; // 별점평균(float)
  /** @description 별점 받은 개수 */
  reviewCount: number;
  price: number;
  matchingFoods: {
    foodName: string;
    imagePath: string;
  }[];
  wineImage: {
    id: number;
    imagePath: string;
    imageName: string;
  };
}

export interface IWineDetail extends IWine {
  wineNameEn: string;
  /** @description 바디 (int) */
  body: number;
  /** @description 용량 (int) */
  capacity: number;
  /** @description 산도 (int) */
  acidity: number;
  region: string;
  /** @description 품종 */
  varieties: string[];
  isRefrigerated: boolean;
  refrigeratedCount: number;
}

export interface IFood {
  id: number;
  foodName: string;
}

export enum MAIN_STEP {
  FOOD = 1, // 메인음식
  PRICE, // 가격대
  SWEET, // 당도
}

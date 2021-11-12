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

export type ITimelineWineNoteList = IPageable<ITimelineWineNote>;

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

export interface IRelatedWineNote {
  wineNoteId: number;
  wineNoteTitle: string;
  wineName: string;
  /** @example 2021-10-11T15:02:00 */
  regDate: string;
  viewCount: number;
  likeCount: number;
  authorName: string;
  thumbnailUrl: string;
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

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  nickName: string;
  profilePhotoURL: string;
  role: USER_ROLE;
  /** @description 유저 SNS 로그인 UUID */
  uuid: number;
}

export interface NickNameValidate {
  isPresent: boolean;
}

export interface SignupRequest {
  kakaoAccessToken: string;
  nickName: string;
}

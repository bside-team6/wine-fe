import { IPrice, ISort, WINE_TYPE } from '~/types';

export const isProduction = process.env.NODE_ENV === 'production';

export const BASE_URL = isProduction
  ? 'https://www.wineasy.kr'
  : 'http://localhost:3000';

export const priceList: IPrice[] = [
  {
    id: 0,
    label: '1만원 이하',
    minPrice: undefined,
    maxPrice: 10_000,
  },
  {
    id: 1,
    label: '1~3만원',
    minPrice: 10_000,
    maxPrice: 30_000,
  },
  {
    id: 2,
    label: '3~5만원',
    minPrice: 30_000,
    maxPrice: 50_000,
  },
  {
    id: 3,
    label: '5~10만원',
    minPrice: 50_000,
    maxPrice: 100_000,
  },
  {
    id: 4,
    label: '10~20만원',
    minPrice: 100_000,
    maxPrice: 200_000,
  },
  {
    id: 5,
    label: '20~50만원',
    minPrice: 200_000,
    maxPrice: 500_000,
  },
  {
    id: 6,
    label: '50만원 이상',
    minPrice: 500_000,
    maxPrice: undefined,
  },
];

export const wineTypeMap: Record<
  WINE_TYPE,
  { text: string; bg: string; typeKr: string }
> = {
  [WINE_TYPE.RED]: {
    text: '#E53858',
    bg: '#FAE6EA',
    typeKr: '레드',
  },
  [WINE_TYPE.ROSE]: {
    text: '#F86818',
    bg: '#FEF0E8',
    typeKr: '로제',
  },
  [WINE_TYPE.WHITE]: {
    text: '#387DE5',
    bg: '#EBF2FC',
    typeKr: '화이트',
  },
  [WINE_TYPE.SPARKLING]: {
    text: '#0EAB44',
    bg: '#EAFEEC',
    typeKr: '스파클링',
  },
  [WINE_TYPE.CHAMPAGNE]: {
    text: '#A39200',
    bg: '#FCF9DF',
    typeKr: '샴페인',
  },
  [WINE_TYPE.FORTIFIED]: {
    text: '#AE4444',
    bg: '#F9EBEB',
    typeKr: '포티파이드',
  },
  [WINE_TYPE.SWEET]: {
    text: '#F06496',
    bg: '#FFEDF6',
    typeKr: '스위트',
  },
};

export interface IWineType {
  type: WINE_TYPE;
  typeKr: string;
}

export const wineTypeList: IWineType[] = Object.entries(wineTypeMap).map(
  ([type, { typeKr }]) => ({
    type: type as WINE_TYPE,
    typeKr,
  }),
);

export const sortList: { label: string; value: ISort }[] = [
  {
    label: '평점 높은 순',
    value: ['score', 'DESC'],
  },
  {
    label: '평점 낮은 순',
    value: ['score', 'ASC'],
  },
  {
    label: '당도 높은 순',
    value: ['sweet', 'DESC'],
  },
  {
    label: '당도 낮은 순',
    value: ['sweet', 'ASC'],
  },
  {
    label: '금액 높은 순',
    value: ['price', 'DESC'],
  },
  {
    label: '금액 낮은 순',
    value: ['price', 'ASC'],
  },
];

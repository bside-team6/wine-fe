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

export interface IWineType {
  type: WINE_TYPE;
  typeKr: string;
}

export const wineTypeList: IWineType[] = [
  {
    type: WINE_TYPE.RED,
    typeKr: '레드',
  },
  {
    type: WINE_TYPE.ROSE,
    typeKr: '로제',
  },
  {
    type: WINE_TYPE.WHITE,
    typeKr: '화이트',
  },
  {
    type: WINE_TYPE.SPARKLING,
    typeKr: '스파클링',
  },
  {
    type: WINE_TYPE.CHAMPAGNE,
    typeKr: '샴페인',
  },
  {
    type: WINE_TYPE.FORTIFIED,
    typeKr: '포티파이드',
  },
  {
    type: WINE_TYPE.SWEET,
    typeKr: '스위트',
  },
];

export const regionList: string[] = [
  '프랑스',
  '이탈리아',
  '스페인',
  '포르투갈',
  '독일',
  '오스트리아',
  '미국',
  '호주',
  '뉴질랜드',
  '칠레',
  '아르헨티나',
  '남아프리카',
];

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

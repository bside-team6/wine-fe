export enum STEP {
  FOOD = 1,
  PRICE,
  SWEET,
}

export interface Price {
  id: number;
  label: string;
  minPrice?: number;
  maxPrice?: number;
}

export const priceList: Price[] = [
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

export const indicatorPosX: Record<STEP, number> = {
  [STEP.FOOD]: 0,
  [STEP.PRICE]: 163,
  [STEP.SWEET]: 326,
};

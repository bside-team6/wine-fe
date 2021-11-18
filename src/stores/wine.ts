import { isEqual } from 'lodash-es';
import { atom, selector } from 'recoil';
import {
  IWineType,
  priceList,
  sortList,
  wineTypeList,
} from '~/helpers/constants';
import { queryClient } from '~/helpers/query';
import {
  getSearchParam,
  getSearchParams,
  priceToIndex,
  toNumber,
} from '~/helpers/utils';
import { IFood, IPrice, ISort, WINE_TYPE, WinesRequest } from '~/types';

export const openState = atom<'food' | 'price' | 'filter' | undefined>({
  key: 'openState',
  default: undefined,
});

interface SelectOne {
  color: 'primary' | 'secondary';
  inactive: boolean;
  bold: boolean;
}

interface SelectMultiple {
  color: 'primary' | 'secondary';
  bold: boolean;
}

// 와인리스트 - 메인음식
export const foodIdState = atom<number | undefined>({
  key: 'foodIdState',
  default: toNumber(getSearchParam('foodId')),
});

export const foodListSelector = selector<(IFood & SelectOne)[]>({
  key: 'foodListSelector',
  get: ({ get }) => {
    const foodId = get(foodIdState);
    const foodList = queryClient.getQueryData<IFood[]>('foods') || [];
    if (foodId) {
      return foodList.map((item) => ({
        ...item,
        color: foodId === item.id ? 'primary' : 'secondary',
        inactive: foodId !== item.id,
        bold: foodId === item.id,
      }));
    }
    return foodList.map((item) => ({
      ...item,
      color: 'secondary',
      inactive: false,
      bold: false,
    }));
  },
});

export const foodLabelSelector = selector({
  key: 'foodLabelSelector',
  get: ({ get }) => {
    const foodId = get(foodIdState);

    if (foodId === undefined) return '메인음식';

    const foodList = queryClient.getQueryData<IFood[]>('foods') || [];

    return foodList.find((food) => food.id === foodId)?.foodName || '메인음식';
  },
});

// 와인리스트 - 가격대
export const priceState = atom({
  key: 'priceState',
  default: priceToIndex(
    toNumber(getSearchParam('minPrice')),
    toNumber(getSearchParam('maxPrice')),
  ),
});

export const priceListSelector = selector<(IPrice & SelectMultiple)[]>({
  key: 'priceListSelector',
  get: ({ get }) => {
    const { minIndex, maxIndex } = get(priceState);
    return priceList.map((item) => {
      const selected = item.id >= minIndex && item.id <= maxIndex;
      return {
        ...item,
        color: selected ? 'primary' : 'secondary',
        bold: selected,
      };
    });
  },
});

export const priceLabelSelector = selector({
  key: 'priceLabelSelector',
  get: ({ get }) => {
    const { minIndex, maxIndex } = get(priceState);

    if (minIndex === -1) return '가격대';

    const minPrice = priceList[minIndex].minPrice?.toString()?.slice(0, -4);
    const maxPrice = priceList[maxIndex].maxPrice?.toString()?.slice(0, -4);

    if (minPrice === undefined) {
      if (maxPrice === undefined) return '가격대';
      return `${maxPrice}만원 이하`;
    }

    if (maxPrice === undefined) {
      return `${minPrice}만원 이상`;
    }

    return `${minPrice}~${maxPrice}만원`;
  },
});

// 와인리스트 - 와인종류
export const wineTypeState = atom<WINE_TYPE | undefined>({
  key: 'wineTypeState',
  default: getSearchParam<WINE_TYPE>('wineType'),
});

export const wineTypeListSelector = selector<(IWineType & SelectOne)[]>({
  key: 'wineTypeListSelector',
  get: ({ get }) => {
    const wineType = get(wineTypeState);
    if (wineType) {
      return wineTypeList.map((item) => ({
        ...item,
        color: wineType === item.type ? 'primary' : 'secondary',
        inactive: wineType !== item.type,
        bold: wineType === item.type,
      }));
    }
    return wineTypeList.map((item) => ({
      ...item,
      color: 'secondary',
      inactive: false,
      bold: false,
    }));
  },
});

// 와인리스트 - 와인명
export const wineNameState = atom<string | undefined>({
  key: 'wineNameState',
  default: getSearchParam('wineName'),
});

// 와인리스트 - 정렬
export const sortState = atom<ISort>({
  key: 'sortState',
  default: getSearchParams<ISort>('sort') || ['score', 'DESC'],
});

export const sortLabelSelector = selector({
  key: 'sortLabelSelector',
  get: ({ get }) => {
    const sort = get(sortState);
    return (
      sortList.find((order) => isEqual(order.value, sort))?.label ||
      '평점 높은 순'
    );
  },
});

// 와인리스트 - 검색 state
export const wineSearchState = selector<WinesRequest>({
  key: 'wineSearchState',
  get: ({ get }) => {
    const foodId = get(foodIdState);
    const { minIndex, maxIndex } = get(priceState);
    const wineType = get(wineTypeState);
    const wineName = get(wineNameState);
    const sort = get(sortState);

    const minPrice = priceList[minIndex]?.minPrice;
    const maxPrice = priceList[maxIndex]?.maxPrice;

    return {
      page: 0,
      foodId,
      minPrice,
      maxPrice,
      sort,
      wineName,
      wineType,
    };
  },
});

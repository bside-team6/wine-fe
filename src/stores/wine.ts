import { atom } from 'recoil';
import type { WinesRequest } from '~/types';

export const winesSearchState = atom<WinesRequest>({
  key: 'winesSearchState',
  default: {
    page: 0,
    foodId: undefined,
    maxPrice: undefined,
    minPrice: undefined,
    sort: undefined,
    wineName: undefined,
  },
});

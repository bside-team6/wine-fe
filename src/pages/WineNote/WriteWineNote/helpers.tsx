import { memo } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { WINE_TYPE } from '~/types';

export interface WineOption {
  readonly value: number | string; // wineId | wineName (create)
  readonly label: string; // wineName
  readonly isNew?: boolean;
}

export interface FoodOption {
  readonly value: number | string; // id | foodName (create)
  readonly label: string; // foodName
  readonly isNew?: boolean;
}

export interface FormValues {
  wine: WineOption;
  isFitted: boolean;
  wineType: WINE_TYPE;
  drinkDate?: Date;
  price?: number;
  sweet: number;
  score: number;
  foods?: FoodOption[];
  descript: string;
  isPublic: boolean;
  image?: File;
}

export const PureAsyncCreatableSelect = memo(AsyncCreatableSelect);

export const getNewOptionData: (
  inputValue: string,
  optionLabel: React.ReactNode,
) => FoodOption = (inputValue, optionLabel) => ({
  label: optionLabel as string,
  value: inputValue,
  isNew: true,
});

export const commonSelectProps: Partial<AsyncCreatableSelect> = {
  classNamePrefix: 'select',
  cacheOptions: true,
  isClearable: true,
  getNewOptionData,
  formatCreateLabel: (inputValue: string) => `"${inputValue}"를 저장합니다`,
  noOptionsMessage: () => '옵션을 입력하세요',
  components: {
    DropdownIndicator: null,
    IndicatorSeparator: null,
  },
};

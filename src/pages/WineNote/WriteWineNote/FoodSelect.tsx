import { Control, useController } from 'react-hook-form';
import type { Options } from 'react-select';
import { getSearchFood } from '~/api/wine-note';
import {
  commonSelectProps,
  FoodOption,
  FormValues,
  PureAsyncCreatableSelect,
} from './helpers';

const promiseOptions: (inputValue: string) => Promise<Options<FoodOption>> =
  async (inputValue) => {
    const data = await getSearchFood(inputValue);
    return data.map(({ id, foodName }) => ({
      label: foodName,
      value: id,
    }));
  };

export interface WineNameSelectProps {
  control: Control<FormValues>;
}

const FoodSelect = ({ control }: WineNameSelectProps) => {
  const { field } = useController({
    name: 'food',
    control,
  });

  return (
    <section>
      <label htmlFor="food">어떤 음식과 곁들였나요?</label>
      <PureAsyncCreatableSelect
        {...field}
        {...commonSelectProps}
        placeholder="함께 먹은 음식명을 입력해주세요"
        loadOptions={promiseOptions}
      />
    </section>
  );
};

export default FoodSelect;

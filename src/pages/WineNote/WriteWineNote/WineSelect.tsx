import { Control, useController } from 'react-hook-form';
import type { Options } from 'react-select';
import { getSearchWine } from '~/api/wine-note';
import { alignCenter } from '~/styles/common';
import {
  commonSelectProps,
  FormValues,
  PureAsyncCreatableSelect,
  WineOption,
} from './helpers';

const promiseOptions: (inputValue: string) => Promise<Options<WineOption>> =
  async (inputValue) => {
    const data = await getSearchWine(inputValue);
    return data.map(({ wineId, wineName }) => ({
      label: wineName,
      value: wineId,
    }));
  };

export interface WineSelectProps {
  control: Control<FormValues>;
}

const WineSelect = ({ control }: WineSelectProps) => {
  const { field } = useController({
    name: 'wine',
    control,
    rules: {
      required: true,
    },
  });

  return (
    <section>
      <label htmlFor="wine" className="required">
        와인의 이름은 무엇인가요?
      </label>
      <div css={alignCenter}>
        <PureAsyncCreatableSelect
          {...field}
          {...commonSelectProps}
          className="flex-grow"
          placeholder="와인 이름을 입력해주세요"
          loadOptions={promiseOptions}
        />
        <div>잘 맞아요</div>
        <div>안 맞아요</div>
      </div>
    </section>
  );
};

export default WineSelect;

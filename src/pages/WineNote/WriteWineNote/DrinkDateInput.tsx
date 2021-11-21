import { Control, useController } from 'react-hook-form';
import { alignCenter } from '~/styles/common';
import { FormValues } from './helpers';

export interface DrinkDateInputProps {
  control: Control<FormValues>;
}

const DrinkDateInput = ({ control }: DrinkDateInputProps) => {
  const { field } = useController({
    name: 'drinkDate',
    control,
  });

  return (
    <section>
      <p>언제 마셨나요?</p>
      <div css={alignCenter}>
        <input
          type="text"
          readOnly
          placeholder="날짜를 선택해주세요."
          className="input"
          {...field}
        />
      </div>
    </section>
  );
};

export default DrinkDateInput;

import { useMemo, useState } from 'react';
import { css, Theme, useTheme } from '@emotion/react';
import {
  Control,
  useController,
  UseFormRegister,
  UseFormResetField,
  useWatch,
} from 'react-hook-form';
import Icon from '~/components/common/Icon';
import StarRatings from '~/components/common/StarRatings';
import RadioButton from '~/components/wineNote/form/RadioButton';
import Switch from '~/components/wineNote/form/Switch';
import { wineTypeList } from '~/helpers/constants';
import { getByteLength } from '~/helpers/utils';
import { alignCenter, inlineFlexCenter, spacing8Style } from '~/styles/common';
import { cantRememberStyle } from '~/styles/wine-note';
import type { FormValues } from './helpers';

export { default as FileInput } from './FileInput';
export { default as FoodsSelect } from './FoodsSelect';
export { default as DrinkDateInput } from './DrinkDateInput';
export { default as WineSelect } from './WineSelect';

export interface WineTypeInputProps {
  control: Control<FormValues>;
}

export const WineTypeInput = ({ control }: WineTypeInputProps) => {
  const {
    field: { value, onChange, name },
  } = useController({
    name: 'wineType',
    control,
  });

  return (
    <section>
      <p className="required">와인의 종류는 무엇인가요?</p>
      <div css={spacing8Style}>
        {wineTypeList.map(({ type, typeKr }) => (
          <RadioButton
            key={type}
            name={name}
            onChange={() => onChange(type)}
            value={type}
            checked={value === type}
          >
            {typeKr}
          </RadioButton>
        ))}
      </div>
    </section>
  );
};

export interface PriceInputProps {
  register: UseFormRegister<FormValues>;
  resetField: UseFormResetField<FormValues>;
}

export const PriceInput = ({ register, resetField }: PriceInputProps) => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    if (disabled) {
      setDisabled(false);
    } else {
      resetField('price');
      setDisabled(true);
    }
  };

  return (
    <section>
      <p>얼마에 구매하셨나요?</p>
      <div css={alignCenter}>
        <input
          type="number"
          placeholder="구매한 가격을 입력해주세요."
          autoComplete="off"
          className="input"
          disabled={disabled}
          {...register('price', {
            setValueAs: (v) => (v ? parseInt(v) : undefined),
          })}
        />
        <span
          css={(theme: Theme) => css`
            color: ${theme.colors.black02};
            font-weight: bold;
            margin-left: 8px;
          `}
        >
          원
        </span>
        <button
          type="button"
          onClick={handleClick}
          className={disabled ? 'checked' : undefined}
          css={cantRememberStyle}
        >
          <Icon name="check" />
          <span>기억나지 않아요</span>
        </button>
      </div>
    </section>
  );
};

export interface SweetInputProps {
  control: Control<FormValues>;
}

const sweets: { label: string; value: number }[] = [
  {
    label: '아주 달달함',
    value: 5,
  },
  {
    label: '약간 달달함',
    value: 3,
  },
  {
    label: '달지 않음',
    value: 1,
  },
];

export const SweetInput = ({ control }: SweetInputProps) => {
  const {
    field: { value, onChange, name },
  } = useController({
    name: 'sweet',
    control,
  });

  return (
    <section>
      <p className="required">와인의 당도는 어땠나요?</p>
      <div css={spacing8Style}>
        {sweets.map((sweet) => (
          <RadioButton
            key={sweet.value}
            name={name}
            onChange={(e) => onChange(sweet.value)}
            value={sweet.value}
            checked={value === sweet.value}
          >
            {sweet.label}
          </RadioButton>
        ))}
      </div>
    </section>
  );
};

export interface FittedInputProps {
  control: Control<FormValues>;
}

export const FittedInput = ({ control }: FittedInputProps) => {
  const theme = useTheme();

  const {
    field: { value, onChange, name },
  } = useController({
    name: 'isFitted',
    control,
  });

  return (
    <section className="inline">
      <p className="required">와인은 어떠셨나요?</p>
      <div
        css={css`
          font-weight: bold;
          color: ${theme.colors.black07};
          label {
            cursor: pointer;
            ${inlineFlexCenter}
            position: relative;
            &:first-of-type {
              margin-right: 16px;
              svg {
                padding: 5px 6px 7px;
              }
            }
          }
          input {
            position: absolute;
            appearance: none;
            opacity: 0;
            &:checked ~ span {
              color: ${theme.colors.main.primary};
            }
            &:checked + svg {
              background: ${theme.colors.main.primary};
            }
          }
          svg {
            width: 32px;
            height: 32px;
            padding: 7px 6px 5px;
            color: ${theme.colors.black10};
            background: ${theme.colors.black07};
            border-radius: 50%;
            margin-right: 8px;
          }
        `}
      >
        <label>
          <input
            type="radio"
            name={name}
            onChange={() => onChange(true)}
            value="true"
            checked={value === true}
          />
          <Icon name="thumbs-up" />
          <span>잘 맞아요</span>
        </label>
        <label>
          <input
            type="radio"
            name={name}
            onChange={() => onChange(false)}
            value="false"
            checked={value === false}
          />
          <Icon name="thumbs-down" />
          <span>안 맞아요</span>
        </label>
      </div>
    </section>
  );
};

export interface ScoreInputProps {
  control: Control<FormValues>;
}

export const ScoreInput = ({ control }: ScoreInputProps) => {
  const { field } = useController({
    name: 'score',
    control,
    defaultValue: 0,
  });

  return (
    <section className="inline">
      <p className="required">몇 점짜리 와인인가요?</p>
      <StarRatings size={32} {...field} />
    </section>
  );
};

export interface WordCalculatorProps {
  control: Control<FormValues>;
}

export const WordCalculator = ({ control }: WordCalculatorProps) => {
  const descript = useWatch({
    name: 'descript',
    control,
  });

  const byteLength = useMemo(() => getByteLength(descript), [descript]);

  return (
    <div
      className={byteLength > 500 ? 'error' : undefined}
      css={(theme: Theme) => css`
        font-size: 12px;
        color: ${theme.colors.black02};
        &.error {
          color: ${theme.colors.red};
        }
      `}
    >
      글자수 제한 : ({byteLength}/500 bytes)
    </div>
  );
};

export interface PublicSwitchProps {
  control: Control<FormValues>;
}

export const PublicSwitch = ({ control }: PublicSwitchProps) => {
  const {
    field: { name, value, onChange, ref },
  } = useController({
    name: 'isPublic',
    control,
    defaultValue: true,
  });

  return (
    <section className="inline">
      <p className="required">노트 공개 여부</p>
      <Switch
        name={name}
        label={value ? '전체공개' : '비공개'}
        checked={value}
        onChange={() => onChange(!value)}
        ref={ref}
      />
    </section>
  );
};

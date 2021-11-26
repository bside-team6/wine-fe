import { useEffect, useMemo, useState } from 'react';
import { css, Theme, useTheme } from '@emotion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import {
  Control,
  SubmitHandler,
  useController,
  useForm,
  UseFormRegister,
  UseFormResetField,
  useWatch,
} from 'react-hook-form';
import { z } from 'zod';
import Divider from '~/components/common/Divider';
import Icon from '~/components/common/Icon';
import RoundButton from '~/components/common/RoundButton';
import StarRatings from '~/components/common/StarRatings';
import RadioButton from '~/components/wineNote/form/RadioButton';
import Switch from '~/components/wineNote/form/Switch';
import { wineTypeList } from '~/helpers/constants';
import { getByteLength } from '~/helpers/utils';
import useWineNoteMutation from '~/queries/useWineNoteMutation';
import { alignCenter, inlineFlexCenter, spacing8Style } from '~/styles/common';
import { cantRememberStyle, writeFormStyle } from '~/styles/wine-note';
import { WINE_TYPE } from '~/types';
import DrinkDateInput from './DrinkDateInput';
import FileInput from './FileInput';
import FoodsSelect from './FoodsSelect';
import type { FormValues } from './helpers';
import WineSelect from './WineSelect';

const schema = z.object({
  wine: z.object({
    value: z.union([z.string(), z.number()]),
    label: z.string(),
    isNew: z.boolean().optional(),
  }),
  isFitted: z.boolean(),
  wineType: z.nativeEnum(WINE_TYPE),
  sweet: z.number().int().min(1).max(5),
  drinkDate: z.date().optional(),
  price: z.number().int().positive().optional(),
  score: z.number().min(0.5).max(5).multipleOf(0.5).optional(),
  foods: z
    .array(
      z.object({
        value: z.union([z.string(), z.number()]),
        label: z.string(),
        isNew: z.boolean().optional(),
      }),
    )
    .optional(),
  descript: z
    .string()
    .refine((value) => getByteLength(value) <= 500, '500bytes 이하'),
  isPublic: z.boolean(),
  image: z.any().optional(),
});

const WriteWineNote = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    resetField,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const { mutate, isLoading } = useWineNoteMutation({
    onSuccess: () => {
      // TODO: // 성공 후 이동, 토스트
    },
  });

  const onSubmit: SubmitHandler<FormValues> = ({
    image,
    foods,
    wine,
    drinkDate,
    ...value
  }) => {
    mutate({
      image,
      data: {
        ...value,
        drinkDate: drinkDate ? format(drinkDate, 'yyyy-MM-dd') : undefined,
        wineId: wine.isNew ? undefined : Number(wine.value),
        wineName: wine.label,
        matchingFoods:
          foods?.map((food) => ({
            foodId: food.isNew ? undefined : Number(food.value),
            foodName: food.label,
          })) || [],
      },
    });
  };

  return (
    <div
      css={css`
        width: 588px;
        max-width: 100%;
        margin: 80px auto;
      `}
    >
      <h2
        css={css`
          font-weight: bold;
          font-size: 24px;
          line-height: 35px;
          margin-bottom: 64px;
        `}
      >
        와인에 대한 이야기를
        <br />
        작성해보세요.
      </h2>
      <form css={writeFormStyle} onSubmit={handleSubmit(onSubmit)}>
        <WineSelect control={control} />
        <WineTypeInput control={control} />
        <Divider type="vertical" />
        <DrinkDateInput control={control} />
        <PriceInput register={register} resetField={resetField} />
        <SweetInput control={control} />
        <FoodsSelect control={control} />
        <Divider type="vertical" />
        <FittedInput control={control} />
        <ScoreInput control={control} />
        <section>
          <p className="required">와인에 대해 설명해주세요.</p>
          <textarea
            placeholder="자세히 기록해두면 다음 와인 선택 시 유용한 정보가 될 수 있어요.&#10;(맛과 향, 느낌 등을 기록해보세요)"
            {...register('descript')}
          />
          <div
            css={css`
              margin-top: 8px;
              display: flex;
              justify-content: space-between;
            `}
          >
            <FileInput control={control} setValue={setValue} />
            <WordCalculator control={control} />
          </div>
        </section>
        <Divider type="vertical" />
        <PublicSwitch control={control} />
        <div
          css={css`
            text-align: center;
          `}
        >
          <RoundButton
            disabled={isLoading}
            type="submit"
            variant="contained"
            size="large"
          >
            작성완료
          </RoundButton>
        </div>
      </form>
    </div>
  );
};

export default WriteWineNote;

interface WineTypeInputProps {
  control: Control<FormValues>;
}

const WineTypeInput = ({ control }: WineTypeInputProps) => {
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

interface PriceInputProps {
  register: UseFormRegister<FormValues>;
  resetField: UseFormResetField<FormValues>;
}

const PriceInput = ({ register, resetField }: PriceInputProps) => {
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

interface SweetInputProps {
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

const SweetInput = ({ control }: SweetInputProps) => {
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

interface FittedInputProps {
  control: Control<FormValues>;
}

const FittedInput = ({ control }: FittedInputProps) => {
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

interface ScoreInputProps {
  control: Control<FormValues>;
}

const ScoreInput = ({ control }: ScoreInputProps) => {
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

interface WordCalculatorProps {
  control: Control<FormValues>;
}

const WordCalculator = ({ control }: WordCalculatorProps) => {
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

interface PublicSwitchProps {
  control: Control<FormValues>;
}

const PublicSwitch = ({ control }: PublicSwitchProps) => {
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

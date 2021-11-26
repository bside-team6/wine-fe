import { css } from '@emotion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import Divider from '~/components/common/Divider';
import RoundButton from '~/components/common/RoundButton';
import { getByteLength } from '~/helpers/utils';
import { usePrompt } from '~/hooks/useExtendedRouter';
import useWineNoteMutation from '~/queries/useWineNoteMutation';
import { writeFormStyle } from '~/styles/wine-note';
import { WINE_TYPE } from '~/types';
import type { FormValues } from './helpers';
import {
  DrinkDateInput,
  FileInput,
  FittedInput,
  FoodsSelect,
  PriceInput,
  PublicSwitch,
  ScoreInput,
  SweetInput,
  WineSelect,
  WineTypeInput,
  WordCalculator,
} from './Inputs';

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
  usePrompt(`페이지를 이동하면\n작성중인 데이터는 저장되지 않습니다`);

  const navigate = useNavigate();

  const { register, control, handleSubmit, setValue, resetField } =
    useForm<FormValues>({
      mode: 'onChange',
      resolver: zodResolver(schema),
    });

  const { mutate, isLoading } = useWineNoteMutation({
    onSuccess: ({ wineNoteId }) => navigate(`/wine-note/${wineNoteId}`),
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

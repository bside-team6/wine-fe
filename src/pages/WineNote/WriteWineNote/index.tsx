import { useMemo } from 'react';
import { css, Theme, useTheme } from '@emotion/react';
import { Control, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import Divider from '~/components/common/Divider';
import RoundButton from '~/components/common/RoundButton';
import StarRatings from '~/components/common/StarRatings';
import RadioButton from '~/components/wineNote/form/RadioButton';
import Switch from '~/components/wineNote/form/Switch';
import { wineTypeList } from '~/helpers/constants';
import { alignCenter, spacing8Style } from '~/styles/common';
import { writeFormStyle } from '~/styles/wine-note';
import DrinkDateInput from './DrinkDateInput';
import FileInput from './FileInput';
import FoodsSelect from './FoodsSelect';
import type { FormValues } from './helpers';
import WineSelect from './WineSelect';

// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// const schema = yup.object({}).required();

const WriteWineNote = () => {
  const theme = useTheme();

  const { register, control, handleSubmit, getValues, setValue } =
    useForm<FormValues>({
      mode: 'onChange',
      // resolver: yupResolver(schema),
      defaultValues: {
        isPublic: true,
      },
    });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
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
      <button onClick={() => console.log(getValues())}>테스트</button>
      <form css={writeFormStyle} onSubmit={handleSubmit(onSubmit)}>
        <WineSelect control={control} />
        <section>
          <p className="required">와인의 종류는 무엇인가요?</p>
          <div css={spacing8Style}>
            {wineTypeList.map(({ type, typeKr }) => (
              <RadioButton key={type} value={type} {...register('wineType')}>
                {typeKr}와인
              </RadioButton>
            ))}
          </div>
        </section>
        <Divider type="vertical" />
        <DrinkDateInput control={control} />
        <section>
          <p>얼마에 구매하셨나요?</p>
          <div css={alignCenter}>
            <input
              type="number"
              placeholder="구매한 가격을 입력해주세요."
              autoComplete="off"
              className="input"
              {...register('price', {
                setValueAs: (v) => (v ? parseInt(v) : undefined),
              })}
            />
            <span
              css={css`
                font-weight: bold;
                color: ${theme.colors.black02};
                margin-left: 8px;
              `}
            >
              원
            </span>
          </div>
        </section>
        <section>
          <p className="required">와인의 당도는 어땠나요?</p>
          <div css={spacing8Style}>
            <RadioButton {...register('sweet')} value={5}>
              아주 달달함
            </RadioButton>
            <RadioButton {...register('sweet')} value={3}>
              약간 달달함
            </RadioButton>
            <RadioButton {...register('sweet')} value={1}>
              달지 않음
            </RadioButton>
          </div>
        </section>
        <FoodsSelect control={control} />
        <Divider type="vertical" />
        <section className="inline">
          <p className="required">몇 점짜리 와인인가요?</p>
          <StarRatings rating={3} size={32} />
        </section>
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
        <section className="inline">
          <p className="required">노트 공개 여부</p>
          <Switch label="전체공개" {...register('isPublic')} />
        </section>
        <div
          css={css`
            text-align: center;
          `}
        >
          <RoundButton type="submit" variant="contained" size="large">
            작성완료
          </RoundButton>
        </div>
      </form>
    </div>
  );
};

export default WriteWineNote;

interface WordCalculatorProps {
  control: Control<FormValues>;
}

const WordCalculator = ({ control }: WordCalculatorProps) => {
  const descript = useWatch({
    name: 'descript',
    control,
  });

  const byteCount = useMemo(() => {
    return new TextEncoder().encode(descript).length;
  }, [descript]);

  return (
    <div
      css={(theme: Theme) => css`
        font-size: 12px;
        color: ${theme.colors.black02};
      `}
    >
      글자수 제한 : ({byteCount}/500 bytes)
    </div>
  );
};

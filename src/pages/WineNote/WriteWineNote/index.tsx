import { css } from '@emotion/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Divider from '~/components/common/Divider';
import RoundButton from '~/components/common/RoundButton';
import StarRatings from '~/components/common/StarRatings';
import Button from '~/components/wineNote/form/Button';
import Switch from '~/components/wineNote/form/Switch';
import { wineTypeList } from '~/helpers/constants';
import { alignCenter, spacing8Style } from '~/styles/common';
import { writeFormStyle } from '~/styles/wine-note';
import FoodSelect from './FoodSelect';
import type { FormValues } from './helpers';
import WineSelect from './WineSelect';

// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// const schema = yup.object({}).required();

const WriteWineNote = () => {
  const { register, control, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
    // resolver: yupResolver(schema),
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
      <form css={writeFormStyle} onSubmit={handleSubmit(onSubmit)}>
        <WineSelect control={control} />
        <section>
          <label htmlFor="wine" className="required">
            와인의 종류는 무엇인가요?
          </label>
          <div css={spacing8Style}>
            {wineTypeList.map(({ type, typeKr }) => (
              <Button key={type}>{typeKr}와인</Button>
            ))}
          </div>
        </section>
        <Divider type="vertical" />
        <section>
          <label htmlFor="wine" className="required">
            언제 마셨나요?
          </label>
          <div css={alignCenter}>
            <input
              type="number"
              readOnly
              placeholder="날짜를 선택해주세요."
              className="input flex-grow"
            />
            <div>기억나지 않아요.</div>
          </div>
        </section>
        <section>
          <label htmlFor="wine" className="required">
            얼마에 구매하셨나요?
          </label>
          <div css={alignCenter}>
            <input
              type="number"
              placeholder="구매한 가격을 입력해주세요."
              className="input flex-grow"
            />
            <span>원</span>
            <div>기억나지 않아요.</div>
          </div>
        </section>
        <section>
          <label htmlFor="wine" className="required">
            와인의 당도는 어땠나요?
          </label>
          <div css={spacing8Style}>
            <Button selected>아주 달달함</Button>
            <Button>약간 달달함</Button>
            <Button>달지 않음</Button>
          </div>
        </section>
        <FoodSelect control={control} />
        <Divider type="vertical" />
        <section className="inline">
          <label htmlFor="wine" className="required">
            몇 점짜리 와인인가요?
          </label>
          <StarRatings rating={3} />
        </section>
        <section>
          <label htmlFor="wine" className="required">
            와인에 대해 설명해주세요.
          </label>
          <textarea
            placeholder="자세히 기록해두면 다음 와인 선택 시 유용한 정보가 될 수 있어요.&#10;(맛과 향, 느낌 등을 기록해보세요)"
          />
          <div>글자수 제한 : (0/500)</div>
        </section>
        <section>{/* TODO: 와인 사진 등록 */}</section>
        <Divider type="vertical" />
        <section className="inline">
          <label htmlFor="isPublic" className="required">
            노트 공개 여부
          </label>
          <Switch {...register('isPublic')} />
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

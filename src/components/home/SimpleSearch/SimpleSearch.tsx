import { css, useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import IconButton from '~/components/common/IconButton';
import RoundButton from '~/components/common/RoundButton';
import useResetWineSearch from '~/hooks/useResetWineSearch';
import useFoodsQuery from '~/queries/useFoodsQuery';
import {
  foodIdState,
  foodLabelSelector,
  foodListSelector,
  priceLabelSelector,
  priceListSelector,
  priceState,
  sortState,
  stepState,
} from '~/stores/wine';
import { alignCenter, spacing8Style } from '~/styles/common';
import { MAIN_STEP } from '~/types';
import Indicator from './Indicator';
import SelectBox from './SelectBox';
import StepButton from './StepButton';

const SimpleSearch: React.VFC = () => {
  useResetWineSearch();

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          position: relative;
          width: 486px;
          height: 60px;
          border: 2px solid ${theme.colors.main.primary};
          box-shadow: ${theme.colors.shadow};
          border-radius: 30px;
          overflow: hidden;
        `}
      >
        <Indicator />
        <div
          css={css`
            ${alignCenter}
            position: relative;
            height: 100%;
          `}
        >
          <ButtonGroup />
          <IconButton
            onClick={() => navigate('/wine')}
            name="search"
            css={css`
              width: 44px;
              height: 44px;
              border-radius: 50%;
              background: ${theme.colors.main.primary};
              color: ${theme.colors.white};
              margin-right: 6px;
              margin-left: auto;
            `}
          />
        </div>
      </div>
      <FoodBox />
      <PriceBox />
      <SweetBox />
    </div>
  );
};

export default SimpleSearch;

const ButtonGroup = () => {
  const foodLabel = useRecoilValue(foodLabelSelector);
  const priceLabel = useRecoilValue(priceLabelSelector);

  return (
    <>
      <StepButton width={170} label={foodLabel} step={MAIN_STEP.FOOD} />
      <StepButton width={150} label={priceLabel} step={MAIN_STEP.PRICE} />
      <StepButton width={112} label="당도" step={MAIN_STEP.SWEET} />
    </>
  );
};

const FoodBox = () => {
  useFoodsQuery({
    suspense: true,
  });

  const setStep = useSetRecoilState(stepState);
  const [foodId, setFood] = useRecoilState(foodIdState);
  const foodList = useRecoilValue(foodListSelector);

  const moveToNextStep = () => {
    // 선택과정을 보여주기 위한 약간의 딜레이
    setTimeout(() => setStep(MAIN_STEP.PRICE), 50);
  };

  const onClickItem = (id: number) => {
    if (id !== foodId) {
      moveToNextStep();
    }
    setFood((state) => (state === id ? undefined : id));
  };

  return (
    <SelectBox
      step={MAIN_STEP.FOOD}
      title="메인음식"
      info="한 가지 음식만 선택해주세요."
      css={spacing8Style}
    >
      {foodList.map(({ id, foodName, ...props }) => (
        <RoundButton
          key={id}
          variant="outlined"
          size="small"
          {...props}
          onClick={() => onClickItem(id)}
        >
          {foodName}
        </RoundButton>
      ))}
    </SelectBox>
  );
};

const PriceBox = () => {
  const [price, setPrice] = useRecoilState(priceState);
  const priceList = useRecoilValue(priceListSelector);

  const onClickItem = (priceId: number) => {
    const { minIndex, maxIndex } = price;

    if (minIndex === -1) {
      // 선택값이 없는 경우
      setPrice({
        minIndex: priceId,
        maxIndex: priceId,
      });
      return;
    }

    if (minIndex === maxIndex && minIndex === priceId) {
      // 선택값이 하나고 그 값을 클릭한 경우
      setPrice({
        minIndex: -1,
        maxIndex: -1,
      });
      return;
    }

    if (priceId < maxIndex) {
      // start 바꾸기
      if (priceId === minIndex) {
        if (minIndex + 1 < 7) {
          setPrice((price) => ({
            ...price,
            minIndex: price.minIndex + 1,
          }));
        }
      } else {
        setPrice((price) => ({
          ...price,
          minIndex: priceId,
        }));
      }
    } else {
      // end 바꾸기
      if (priceId === maxIndex) {
        if (maxIndex - 1 >= 0) {
          setPrice((price) => ({
            ...price,
            maxIndex: price.maxIndex - 1,
          }));
        }
      } else {
        setPrice((price) => ({
          ...price,
          maxIndex: priceId,
        }));
      }
    }
  };

  return (
    <SelectBox
      step={MAIN_STEP.PRICE}
      title="가격대"
      info="복수 선택 가능"
      css={css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        button {
          padding: 0;
        }
      `}
    >
      {priceList.map(({ id, label, color, bold }) => (
        <RoundButton
          key={id}
          variant="outlined"
          size="small"
          color={color}
          bold={bold}
          onClick={() => onClickItem(id)}
        >
          {label}
        </RoundButton>
      ))}
    </SelectBox>
  );
};

const SweetBox = () => {
  const [sort, setSort] = useRecoilState(sortState);

  const onClickItem = (sortBySweet: boolean) => {
    setSort(sortBySweet ? ['sweet', 'DESC'] : undefined);
  };

  return (
    <SelectBox
      step={MAIN_STEP.SWEET}
      title="달달한 순서대로 보여드릴까요?"
      css={css`
        button {
          width: 100%;
          &:first-of-type {
            margin-bottom: 12px;
          }
        }
      `}
    >
      <RoundButton
        variant="outlined"
        color={!!sort ? 'primary' : 'secondary'}
        bold={!!sort}
        size="large"
        onClick={() => onClickItem(true)}
      >
        네
      </RoundButton>
      <RoundButton
        variant="outlined"
        color={!sort ? 'primary' : 'secondary'}
        bold={!sort}
        size="large"
        onClick={() => onClickItem(false)}
      >
        아니오
      </RoundButton>
    </SelectBox>
  );
};

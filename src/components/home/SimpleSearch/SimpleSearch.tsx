import React, { useMemo, useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { produce } from 'immer';
import { useNavigate } from 'react-router-dom';
import IconButton from '~/components/common/IconButton';
import RoundButton from '~/components/common/RoundButton';
import useFoodsQuery from '~/queries/useFoodsQuery';
import { alignCenter } from '~/styles/common';
import type { IFood } from '~/types';
import { Price, priceList, STEP } from './helpers';
import Indicator from './Indicator';
import SelectBox from './SelectBox';
import StepButton from './StepButton';

interface FormValues {
  [STEP.FOOD]: IFood | undefined;
  [STEP.PRICE]: {
    start: number;
    end: number;
  };
  [STEP.SWEET]: boolean | undefined;
}

const SimpleSearch: React.VFC = () => {
  const navigate = useNavigate();

  const theme = useTheme();

  // 1: 메인음식, 2: 가격대, 3: 당도, undefined: 선택되지 않음
  const [step, setStep] = useState<STEP | undefined>(undefined);

  // 선택 데이터
  const [data, setData] = useState<FormValues>({
    [STEP.FOOD]: undefined,
    [STEP.PRICE]: {
      start: -1,
      end: -1,
    },
    [STEP.SWEET]: undefined,
  });

  const onClickStepButton = (button: STEP) => {
    setStep((step) => (step === button ? undefined : button));
  };

  const moveToNextStep = () => {
    // 선택과정을 보여주기 위한 약간의 딜레이
    setTimeout(() => {
      setStep((step) => (!step || step === STEP.SWEET ? step : step + 1));
    }, 50);
  };

  const priceLabel = useMemo(() => {
    const { start, end } = data[STEP.PRICE];
    if (start === -1) return '가격대';
    const minPrice = priceList[start].minPrice?.toString()?.slice(0, -4);
    const maxPrice = priceList[end].maxPrice?.toString()?.slice(0, -4);
    if (minPrice === undefined) {
      if (maxPrice === undefined) return '가격대';
      return `${maxPrice}만원 이하`;
    }
    if (maxPrice === undefined) {
      return `${minPrice}만원 이상`;
    }
    return `${minPrice}~${maxPrice}만원`;
  }, [data]);

  const onSearch = () => {
    const searchParams = new URLSearchParams();
    if (data[STEP.FOOD] !== undefined) {
      searchParams.set('foodId', String(data[STEP.FOOD]!.id));
    }
    if (data[STEP.PRICE].start !== -1) {
      const { minPrice } = priceList[data[STEP.PRICE].start];
      if (minPrice !== undefined) {
        searchParams.set('minPrice', String(minPrice));
      }
      if (data[STEP.PRICE].end !== -1) {
        const { maxPrice } = priceList[data[STEP.PRICE].end];
        if (maxPrice !== undefined) {
          searchParams.set('maxPrice', String(maxPrice));
        }
      }
    }
    if (data[STEP.SWEET] !== undefined) {
      searchParams.set('sortBy', data[STEP.SWEET] ? 'sweet' : 'price');
    }
    navigate({
      pathname: '/wine',
      search: searchParams.toString(),
    });
  };

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
        {step && <Indicator step={step} />}
        <div
          css={css`
            ${alignCenter}
            position: relative;
            height: 100%;
          `}
        >
          <StepButton
            width={170}
            label={data[STEP.FOOD]?.foodName || '메인음식'}
            step={STEP.FOOD}
            currentStep={step}
            onClick={onClickStepButton}
          />
          <StepButton
            width={150}
            label={priceLabel}
            step={STEP.PRICE}
            currentStep={step}
            onClick={onClickStepButton}
          />
          <StepButton
            width={112}
            label="당도"
            step={STEP.SWEET}
            currentStep={step}
            onClick={onClickStepButton}
          />
          <IconButton
            onClick={onSearch}
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
      {/* 스텝별 세부 선택 박스 */}
      {step === STEP.FOOD && (
        <FoodBox
          data={data[STEP.FOOD]}
          setData={setData}
          moveToNextStep={moveToNextStep}
        />
      )}
      {step === STEP.PRICE && (
        <PriceBox data={data[STEP.PRICE]} setData={setData} />
      )}
      {step === STEP.SWEET && (
        <SweetBox data={data[STEP.SWEET]} setData={setData} />
      )}
    </div>
  );
};

export default SimpleSearch;

interface SelectBoxProps<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<FormValues>>;
  moveToNextStep?: VoidFunction;
}

export interface FoodItem extends IFood {
  color: 'primary' | 'secondary';
  inactive: boolean;
  bold: boolean;
}

const FoodBox = ({
  data,
  setData,
  moveToNextStep,
}: SelectBoxProps<FormValues[STEP.FOOD]>) => {
  const { data: foodData } = useFoodsQuery();

  const foods = useMemo<FoodItem[]>(() => {
    if (!foodData) return [];
    const foodId = data?.id;
    if (foodId) {
      return foodData.map((food) => ({
        ...food,
        color: foodId === food.id ? 'primary' : 'secondary',
        inactive: foodId !== food.id,
        bold: foodId === food.id,
      }));
    }
    // 선택값이 없으면 전부 default
    return foodData.map((food) => ({
      ...food,
      color: 'secondary',
      bold: false,
      inactive: false,
    }));
  }, [foodData, data]);

  const onClickItem = (food: IFood) => {
    if (food.id !== data?.id) {
      moveToNextStep?.();
    }
    setData(
      produce((draft) => {
        draft[STEP.FOOD] = draft[STEP.FOOD]?.id === food.id ? undefined : food;
      }),
    );
  };

  return (
    <SelectBox
      title="메인음식"
      info="한 가지 음식만 선택해주세요."
      css={css`
        display: flex;
        flex-wrap: wrap;
        margin-right: -8px;
        margin-bottom: -8px;
        button {
          margin-right: 8px;
          margin-bottom: 8px;
        }
      `}
    >
      {foods.map(({ id, foodName, ...props }) => (
        <RoundButton
          key={id}
          variant="outlined"
          size="small"
          {...props}
          onClick={() => onClickItem({ id, foodName })}
        >
          {foodName}
        </RoundButton>
      ))}
    </SelectBox>
  );
};

interface PriceItem extends Price {
  color: 'primary' | 'secondary';
  bold: boolean;
}

const PriceBox = ({
  data,
  setData,
}: SelectBoxProps<FormValues[STEP.PRICE]>) => {
  const prices = useMemo<PriceItem[]>(() => {
    const startIdx = data.start;
    const endIdx = data.end;
    return priceList.map((price) => {
      const selected = price.id >= startIdx && price.id <= endIdx;
      return {
        ...price,
        color: selected ? 'primary' : 'secondary',
        bold: selected,
      };
    });
  }, [data]);

  const onClickItem = (priceId: number) => {
    setData(
      produce((draft) => {
        const { start, end } = draft[STEP.PRICE];
        if (start === -1) {
          // 선택값이 없는 경우
          draft[STEP.PRICE] = {
            start: priceId,
            end: priceId,
          };
          return;
        }
        if (start === end && start === priceId) {
          draft[STEP.PRICE] = {
            start: -1,
            end: -1,
          };
          return;
        }
        if (priceId < end) {
          // start 바꾸기
          if (priceId === start) {
            if (draft[STEP.PRICE].start + 1 < 7) draft[STEP.PRICE].start += 1;
          } else {
            draft[STEP.PRICE].start = priceId;
          }
        } else {
          // end 바꾸기
          if (priceId === end) {
            if (draft[STEP.PRICE].end - 1 >= 0) draft[STEP.PRICE].end -= 1;
          } else {
            draft[STEP.PRICE].end = priceId;
          }
        }
      }),
    );
  };

  return (
    <SelectBox
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
      {prices.map(({ id, label, color, bold }) => (
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

const SweetBox = ({
  data,
  setData,
}: SelectBoxProps<FormValues[STEP.SWEET]>) => {
  const onClickItem = (bool: boolean) => {
    setData(
      produce((draft) => {
        draft[STEP.SWEET] = draft[STEP.SWEET] === bool ? undefined : bool;
      }),
    );
  };

  return (
    <SelectBox
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
        color={data === true ? 'primary' : 'secondary'}
        bold={data === true}
        size="large"
        onClick={() => onClickItem(true)}
      >
        네
      </RoundButton>
      <RoundButton
        variant="outlined"
        color={data === false ? 'primary' : 'secondary'}
        bold={data === false}
        size="large"
        onClick={() => onClickItem(false)}
      >
        아니오
      </RoundButton>
    </SelectBox>
  );
};

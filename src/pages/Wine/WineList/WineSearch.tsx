import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { css, useTheme } from '@emotion/react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import Divider from '~/components/common/Divider';
import IconButton from '~/components/common/IconButton';
import RoundButton from '~/components/common/RoundButton';
import useFoodsQuery from '~/queries/useFoodsQuery';
import {
  foodIdState,
  foodLabelSelector,
  foodListSelector,
  openState,
  priceLabelSelector,
  priceListSelector,
  priceState,
  wineNameState,
  wineTypeListSelector,
  wineTypeState,
} from '~/stores/wine';
import { alignCenter, inlineFlexCenter, spacing8Style } from '~/styles/common';

const WineSearch = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const onReset = useRecoilCallback(
    ({ reset }) =>
      () => {
        reset(foodIdState);
        reset(priceState);
        reset(wineTypeState);
        reset(wineNameState);
      },
    [],
  );

  return (
    <>
      <div
        css={css`
          ${alignCenter}
          & > button {
            margin-right: 8px;
          }
        `}
      >
        <RoundButton variant="contained" icon="refresh" onClick={onReset} />
        <Food portalRef={targetRef} />
        <Price portalRef={targetRef} />
        <Filter />
        <Input />
      </div>
      <div id="search-list" ref={targetRef} />
    </>
  );
};

export default WineSearch;

const Food = ({
  portalRef,
}: {
  portalRef: React.RefObject<HTMLDivElement>;
}) => {
  useFoodsQuery({
    suspense: true,
  });

  const [open, setOpen] = useRecoilState(openState);

  const [foodId, setFood] = useRecoilState(foodIdState);
  const foodList = useRecoilValue(foodListSelector);
  const foodLabel = useRecoilValue(foodLabelSelector);

  const onClickItem = (id: number) => {
    setFood((state) => (state === id ? undefined : id));
  };

  return (
    <>
      <RoundButton
        variant="outlined"
        color={
          open === 'food' || foodId !== undefined ? 'primary' : 'secondary'
        }
        icon="arrow-down"
        iconPosition="right"
        onClick={() =>
          setOpen((state) => (state === 'food' ? undefined : 'food'))
        }
      >
        {foodLabel}
      </RoundButton>
      {open === 'food' &&
        portalRef.current &&
        createPortal(
          <>
            <Divider
              type="vertical"
              css={css`
                margin: 20px 0;
              `}
            />
            <div css={spacing8Style}>
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
            </div>
          </>,
          portalRef.current,
        )}
    </>
  );
};

const Price = ({
  portalRef,
}: {
  portalRef: React.RefObject<HTMLDivElement>;
}) => {
  const [open, setOpen] = useRecoilState(openState);

  const [price, setPrice] = useRecoilState(priceState);
  const priceList = useRecoilValue(priceListSelector);
  const priceLabel = useRecoilValue(priceLabelSelector);

  const onClickItem = (priceId: number) => {
    const { minIndex, maxIndex } = price;

    if (minIndex === -1) {
      // ???????????? ?????? ??????
      setPrice({
        minIndex: priceId,
        maxIndex: priceId,
      });
      return;
    }

    if (minIndex === maxIndex && minIndex === priceId) {
      // ???????????? ????????? ??? ?????? ????????? ??????
      setPrice({
        minIndex: -1,
        maxIndex: -1,
      });
      return;
    }

    if (priceId < maxIndex) {
      // start ?????????
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
      // end ?????????
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
    <>
      <RoundButton
        variant="outlined"
        color={
          open === 'price' || price.minIndex !== -1 ? 'primary' : 'secondary'
        }
        icon="arrow-down"
        iconPosition="right"
        onClick={() =>
          setOpen((state) => (state === 'price' ? undefined : 'price'))
        }
      >
        {priceLabel}
      </RoundButton>
      {open === 'price' &&
        portalRef.current &&
        createPortal(
          <>
            <Divider
              type="vertical"
              css={css`
                margin: 20px 0;
              `}
            />
            <div css={spacing8Style}>
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
            </div>
          </>,
          portalRef.current,
        )}
    </>
  );
};

const Filter = () => {
  const theme = useTheme();

  const [open, setOpen] = useRecoilState(openState);

  const [wineType, setWineType] = useRecoilState(wineTypeState);
  const wineTypeList = useRecoilValue(wineTypeListSelector);

  return (
    <div
      css={css`
        position: relative;
        ${inlineFlexCenter}
      `}
    >
      <RoundButton
        variant="outlined"
        color={
          open === 'filter' || wineType !== undefined ? 'primary' : 'secondary'
        }
        icon="filter"
        iconPosition="right"
        onClick={() =>
          setOpen((state) => (state === 'filter' ? undefined : 'filter'))
        }
      >
        ??????
      </RoundButton>
      <div
        css={css`
          display: ${open === 'filter' ? `block` : `none`};
          position: absolute;
          top: 52px;
          left: 0;
          width: 496px;
          background: ${theme.colors.white};
          border: 2px solid ${theme.colors.border};
          border-radius: 20px;
          padding: 28px;
          z-index: 1;
          h4 {
            font-weight: bold;
            font-size: 18px;
            line-height: 26px;
            margin-bottom: 20px;
          }
        `}
      >
        <IconButton
          onClick={() => setOpen(undefined)}
          name="cancel"
          css={css`
            position: absolute;
            top: 16px;
            right: 16px;
          `}
        />
        <div>
          <h4>????????????</h4>
          <div css={spacing8Style}>
            {wineTypeList.map(({ type, typeKr, ...props }) => (
              <RoundButton
                key={type}
                variant="outlined"
                size="small"
                {...props}
                onClick={() =>
                  setWineType((state) => (state === type ? undefined : type))
                }
              >
                {typeKr}
              </RoundButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = () => {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const [wineName, setWineName] = useRecoilState(wineNameState);

  const onSearch = () => {
    const value = inputRef.current?.value;
    setWineName(value === '' ? undefined : value);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  useEffect(() => {
    // reset ?????? value??? ?????????
    if (wineName === undefined && inputRef.current) {
      inputRef.current.value = '';
    }
  }, [wineName]);

  return (
    <div
      css={css`
        margin-left: auto;
        width: 384px;
        border: 2px solid ${theme.colors.border};
        border-radius: 22px;
        overflow: hidden;
        padding-left: 24px;
        padding-right: 18px;
        height: 44px;
        ${alignCenter}
        input {
          font-size: 14px;
          line-height: 20px;
          flex-grow: 1;
          border: 0;
          appearance: none;
          outline: none;
          &::placeholder {
            color: ${theme.colors.black04};
          }
        }
        button {
          margin-left: 10px;
          flex-shrink: 0;
        }
      `}
    >
      <input
        type="text"
        placeholder="??????????????? ??????"
        onKeyDown={onKeyDown}
        ref={inputRef}
      />
      <IconButton name="search" onClick={onSearch} />
    </div>
  );
};

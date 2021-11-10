import React from 'react';
import { css } from '@emotion/react';
import RoundButton from '~/components/common/RoundButton';
import { alignCenter } from '~/styles/common';
import { ReactComponent as Refresh } from '~/assets/ic_refresh.svg';

const WineListMainHeader = () => {
  return (
    <div
      css={css`
        width: 1200px;
        max-width: 100%;
        margin: 80px auto 40px;
      `}
    >
      <h2
        css={css`
          color: #000;
          font-weight: 700;
          font-size: 40px;
          line-height: 57.92px;
        `}
      >
        당신이 궁금한 와인을
        <br />
        찾아드립니다!
      </h2>
      <div
        css={css`
          margin-top: 80px;
          ${alignCenter}
        `}
      >
        <div css={RefreshBtnStyle}>
          <Refresh />
        </div>
        <RoundButton css={marginRight} color="secondary">
          스테이크
        </RoundButton>
        <RoundButton css={marginRight} color="secondary">
          1~3만원
        </RoundButton>
        <RoundButton color="secondary">필터</RoundButton>
      </div>
    </div>
  );
};

export default WineListMainHeader;
const RefreshBtnStyle = (theme) => css`
  width: 56px;
  height: 42px;
  border-radius: 20px;
  background-color: ${theme.colors.main.primary};
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const marginRight = () => css`
  margin-right: 8px;
`;

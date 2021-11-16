import { css, Theme } from '@emotion/react';
import RoundButton from '~/components/common/RoundButton';
import { alignCenter } from '~/styles/common';

const WineListHeader = () => {
  return (
    <div
      css={(theme: Theme) => css`
        width: ${theme.breakpoints.lg};
        max-width: 100%;
        margin: 80px auto 40px;
      `}
    >
      <h2
        css={css`
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
          ${alignCenter}
          margin-top: 80px;
          button {
            margin-right: 8px;
            &:last-child {
              margin-right: 0;
            }
          }
        `}
      >
        <RoundButton variant="contained" icon="refresh" />
        <RoundButton
          variant="outlined"
          color="primary"
          icon="arrow-down"
          iconPosition="right"
        >
          스테이크
        </RoundButton>
        <RoundButton
          variant="outlined"
          color="secondary"
          icon="arrow-down"
          iconPosition="right"
        >
          1~3만원
        </RoundButton>
        <RoundButton
          variant="outlined"
          color="secondary"
          icon="filter"
          iconPosition="right"
        >
          필터
        </RoundButton>
      </div>
    </div>
  );
};

export default WineListHeader;

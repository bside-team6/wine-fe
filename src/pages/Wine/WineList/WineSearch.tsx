import { css } from '@emotion/react';
import RoundButton from '~/components/common/RoundButton';
import { alignCenter } from '~/styles/common';

const WineSearch = () => {
  return (
    <div
      css={css`
        ${alignCenter}
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
      <input
        type="text"
        css={css`
          margin-left: auto;
        `}
      />
    </div>
  );
};

export default WineSearch;

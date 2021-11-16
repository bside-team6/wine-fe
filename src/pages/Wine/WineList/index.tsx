import { css, useTheme } from '@emotion/react';
import WineListContent from './WineListContent';
import WineSearch from './WineSearch';

function WineList() {
  const theme = useTheme();

  return (
    <div
      css={css`
        width: ${theme.breakpoints.lg};
        max-width: 100%;
        margin: 0 auto;
      `}
    >
      <h2
        css={css`
          font-weight: 700;
          font-size: 40px;
          line-height: 58px;
          margin-top: 80px;
          margin-bottom: 80px;
        `}
      >
        당신이 궁금한 와인을
        <br />
        찾아드립니다!
      </h2>
      <WineSearch />
      <hr
        css={css`
          margin: 20px 0 60px;
          width: 100%;
          height: 1px;
          border: 0;
          border-bottom: 1px solid ${theme.colors.black09};
        `}
      />
      <WineListContent />
    </div>
  );
}

export default WineList;

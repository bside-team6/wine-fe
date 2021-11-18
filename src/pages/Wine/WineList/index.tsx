import { Suspense } from 'react';
import { css, useTheme } from '@emotion/react';
import Divider from '~/components/common/Divider';
import useResetWineSearch from '~/hooks/useResetWineSearch';
import WineListContent from './WineListContent';
import WineSearch from './WineSearch';

function WineList() {
  useResetWineSearch();

  const theme = useTheme();

  return (
    <Suspense fallback={null}>
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
        <Divider
          type="vertical"
          css={css`
            margin: 20px 0 60px;
          `}
        />
        <WineListContent />
      </div>
    </Suspense>
  );
}

export default WineList;

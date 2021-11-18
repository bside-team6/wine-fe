import { css, Theme } from '@emotion/react';
import { useParams } from 'react-router-dom';
import Divider from '~/components/common/Divider';
import useWineQuery from '~/queries/useWineQuery';
import AboutWine from './AboutWine';
import Wine from './Wine';
import WineDescription from './WineDescription';

const WineDetail: React.VFC = () => {
  const { wineId } = useParams();
  const { data } = useWineQuery(Number(wineId), {
    suspense: true,
  });

  return (
    <div
      css={(theme: Theme) => css`
        width: ${theme.breakpoints.lg};
        max-width: 100%;
        margin: 100px auto 97px;
      `}
    >
      <Wine {...data!} />
      <Divider
        type="vertical"
        css={css`
          margin-top: 50px;
          margin-bottom: 57px;
        `}
      />
      <WineDescription {...data!} />
      <AboutWine {...data!} />
    </div>
  );
};

export default WineDetail;

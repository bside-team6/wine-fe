import React from 'react';
import { css } from '@emotion/react';
import WineItem from 'components/wineItem/WineItem';
import useWineSearchQuery from 'queries/useWineSearchQuery';
import Spinner from 'components/common/Spinner';

const WineListMainContents = () => {
  const { data, isLoading } = useWineSearchQuery(
    {
      enabled: false,
    },
    { count: 10, page: 1 },
  );
  if (isLoading) {
    return (
      <div className="my-5 d-flex justify-content-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div
      css={css`
        width: 1200px;
        max-width: 100%;
        margin: 80px auto 40px;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(4, 1fr);
      `}
    >
      {data && data.map((item, key) => <WineItem key={key} data={item} />)}
    </div>
  );
};

export default WineListMainContents;

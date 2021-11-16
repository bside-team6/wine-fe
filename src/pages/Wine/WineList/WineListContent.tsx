import { css, Theme } from '@emotion/react';
import Spinner from '~/components/common/Spinner';
import WineItem from '~/components/wine/WineItem';
import useWinesQuery from '~/queries/useWinesQuery';

const WineListContent = () => {
  const { data, isLoading } = useWinesQuery({ page: 0 });

  if (isLoading) {
    return <Spinner />;
  }

  console.log(data);

  return (
    <div>
      <div
        css={(theme: Theme) => css`
          width: ${theme.breakpoints.lg};
          max-width: 100%;
          margin: 80px auto 40px;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(4, 1fr);
          grid-column-gap: 24px;
          grid-row-gap: 54px;
        `}
      >
        {data?.content?.map((item) => (
          <WineItem key={item.id} {...item} />
        ))}
      </div>
      <div>패아장</div>
    </div>
  );
};

export default WineListContent;

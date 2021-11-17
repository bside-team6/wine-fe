import { css } from '@emotion/react';
import Spinner from '~/components/common/Spinner';
import WineItem from '~/components/wine/WineItem';
import useWinesQuery from '~/queries/useWinesQuery';
import { alignCenter, contentCenter } from '~/styles/common';
import OrderDropdown from './OrderDropdown';
import Pagination from './Pagination';

const WineListContent = () => {
  const { data, isLoading } = useWinesQuery({ page: 0 });

  if (isLoading) {
    return (
      <div
        css={css`
          ${contentCenter}
          margin-top: 100px;
        `}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div
        css={css`
          ${alignCenter}
          justify-content: space-between;
          margin-bottom: 22px;
        `}
      >
        <div
          css={css`
            strong {
              font-weight: 700;
            }
          `}
        >
          총 <strong>{data?.totalElements || 0}</strong>건
        </div>
        <OrderDropdown />
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(4, 1fr);
          grid-column-gap: 24px;
          grid-row-gap: 48px;
        `}
      >
        {data?.content?.map((item) => (
          <WineItem key={item.id} {...item} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default WineListContent;

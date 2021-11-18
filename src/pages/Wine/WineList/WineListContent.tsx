import { useEffect } from 'react';
import { css } from '@emotion/react';
import { isUndefined, omitBy } from 'lodash-es';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Spinner from '~/components/common/Spinner';
import WineItem from '~/components/wine/WineItem';
import useWinesQuery from '~/queries/useWinesQuery';
import { wineSearchState } from '~/stores/wine';
import { alignCenter, contentCenter } from '~/styles/common';
import Pagination from './Pagination';
import SortOrder from './SortOrder';

const WineListContent = () => {
  const [, setSearchParams] = useSearchParams();
  const wineSearch = useRecoilValue(wineSearchState);

  const { data, isLoading } = useWinesQuery(wineSearch);

  useEffect(() => {
    // state -> searchParams
    setSearchParams(omitBy(wineSearch, isUndefined), { replace: true });
  }, [setSearchParams, wineSearch]);

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
        <SortOrder />
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

import { useEffect, useMemo } from 'react';
import { css } from '@emotion/react';
import { isUndefined, omitBy } from 'lodash-es';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Spinner from '~/components/common/Spinner';
import Pagination from '~/components/wine/Pagination';
import WineItem from '~/components/wine/WineItem';
import useWinesQuery from '~/queries/useWinesQuery';
import { wineSearchState } from '~/stores/wine';
import { alignCenter, contentCenter, flexCenter } from '~/styles/common';
import { WinesRequest } from '~/types';
import SortOrder from './SortOrder';

const WineListContent = () => {
  const wineSearch = useRecoilValue(wineSearchState);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = useMemo(() => {
    const page = searchParams.get('page');
    return page ? Number(page) : 0;
  }, [searchParams]);

  const { data, isLoading } = useWinesQuery({ ...wineSearch, page });

  useEffect(() => {
    /**
     * state -> searchParams
     * 검색조건을 바꿨을 때 page는 0으로 초기화
     */
    setSearchParams(omitBy(wineSearch, isUndefined), { replace: true });
  }, [setSearchParams, wineSearch]);

  if (isLoading || !data) {
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

  const { content, ...paginationProps } = data;

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
          총 <strong>{data.totalElements || 0}</strong>건
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
        {content.map((item) => (
          <WineItem key={item.id} {...item} />
        ))}
      </div>
      <div
        css={css`
          margin-top: 80px;
          margin-bottom: 120px;
          ${flexCenter}
        `}
      >
        <Pagination
          {...paginationProps}
          onChange={(page) => {
            const req: WinesRequest = { ...wineSearch, page: page - 1 };
            setSearchParams(omitBy(req, isUndefined)); // push
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </>
  );
};

export default WineListContent;

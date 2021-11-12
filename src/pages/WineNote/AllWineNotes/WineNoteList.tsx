import { Fragment, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import WineNote from '~/components/wineNote/WineNote';
import useWineNotesQuery from '~/queries/useWineNotesQuery';

const WineNoteList = () => {
  const { data, fetchNextPage, hasNextPage } = useWineNotesQuery({
    suspense: true,
  });

  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (target && hasNextPage) {
      const observer = new IntersectionObserver((entries) =>
        entries.forEach((entry) => entry.isIntersecting && fetchNextPage()),
      );
      observer.observe(target);
      return () => observer.disconnect();
    }
  }, [fetchNextPage, hasNextPage]);

  if (data?.pages[0]?.data.totalElements === 0) {
    return (
      <div
        css={css`
          margin: 20px auto;
        `}
      >
        <div
          css={css`
            width: 180px;
            height: 180px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 24px;
          `}
        >
          <img src="https://via.placeholder.com/180" alt="no-wine-note" />
        </div>
        <div
          css={css`
            text-align: center;
            font-weight: 700;
            font-size: 18px;
          `}
        >
          아직 작성된 와인노트가 없습니다.
          <br />
          첫번째 작성자가 되어주세요!
        </div>
      </div>
    );
  }

  return (
    <div>
      {data?.pages.map(
        ({ data: { wineNoteTimeLineResultList, currentPage } }) => (
          <Fragment key={currentPage}>
            {wineNoteTimeLineResultList.map((item) => (
              <WineNote key={item.id} {...item} />
            ))}
          </Fragment>
        ),
      )}
      <div ref={targetRef} />
    </div>
  );
};

export default WineNoteList;

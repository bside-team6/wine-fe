import { Fragment, useEffect, useRef } from 'react';
import WineNote from '~/components/wineNote/WineNote';
import useWineNotesQuery from '~/queries/useWineNotesQuery';
import { emptyStyle } from '~/styles/wine-note';
import noDataImg from '~/assets/no_data_wine.png';

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

  if (data?.pages[0]?.empty) {
    return (
      <div css={emptyStyle}>
        <img src={noDataImg} alt="empty" />
        <p>
          아직 작성된 와인노트가 없습니다.
          <br />
          첫번째 작성자가 되어주세요!
        </p>
      </div>
    );
  }

  return (
    <div>
      {data?.pages.map(({ content, number: page }) => (
        <Fragment key={page}>
          {content.map((item) => (
            <WineNote key={item.id} {...item} />
          ))}
        </Fragment>
      ))}
      <div ref={targetRef} />
    </div>
  );
};

export default WineNoteList;

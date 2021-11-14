import { Fragment, useRef } from 'react';
import { css } from '@emotion/react';
import WineNote from '~/components/wineNote/WineNote';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import useWineNotesQuery from '~/queries/useWineNotesQuery';
import { emptyStyle, wineNoteListItemStyle } from '~/styles/wine-note';
import noDataImg from '~/assets/no_data_wine.png';

const WineNoteList = () => {
  const { data, fetchNextPage, hasNextPage } = useWineNotesQuery({
    isTimeline: false,
  });

  const targetRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: targetRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

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
    <div
      css={css`
        a {
          ${wineNoteListItemStyle}
        }
      `}
    >
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

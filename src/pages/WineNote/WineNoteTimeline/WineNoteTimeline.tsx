import { Fragment, useRef } from 'react';
import { css, useTheme } from '@emotion/react';
import Icon from '~/components/common/Icon';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import useWineNotesQuery from '~/queries/useWineNotesQuery';
import { buttonStyle } from '~/styles/common';
import { emptyStyle } from '~/styles/wine-note';
import TimelineItem from './TimelineItem';
import noDataImg from '~/assets/no_data_wine.png';

const WineNoteTimeline = () => {
  const theme = useTheme();

  const { data, fetchNextPage, hasNextPage } = useWineNotesQuery({
    isTimeline: true,
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
        <p>아직 작성된 와인노트가 없습니다.</p>
      </div>
    );
  }

  return (
    <div
      css={css`
        position: relative;
        margin: 0 auto;
        width: ${theme.breakpoints.lg};
        max-width: 100%;
      `}
    >
      <button
        css={css`
          ${buttonStyle}
          position: absolute;
          top: -24px;
          left: -10px;
          z-index: 1;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: ${theme.colors.white};
          border: 2px solid ${theme.colors.border};
        `}
      >
        <Icon name="share" />
      </button>
      <div
        css={css`
          position: relative;
          &:before {
            content: ' ';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 13px;
            width: 1px;
            background-color: ${theme.colors.black07};
          }
        `}
      >
        {data?.pages.map(({ content, number: page }) => (
          <Fragment key={page}>
            {content.map((item) => (
              <TimelineItem key={item.id} note={item} />
            ))}
          </Fragment>
        ))}
        <div ref={targetRef} />
      </div>
    </div>
  );
};

export default WineNoteTimeline;

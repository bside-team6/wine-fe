import React, { Fragment, useRef } from 'react';
import { css, useTheme } from '@emotion/react';
import Icon from '~/components/common/Icon';
import WineNote from '~/components/wineNote/WineNote';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import useWineNotesQuery from '~/queries/useWineNotesQuery';
import { alignCenter, buttonStyle } from '~/styles/common';
import { emptyStyle, wineNoteListItemStyle } from '~/styles/wine-note';
import type { IWineNote } from '~/types';
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
          border: 2px solid ${theme.colors.black08};
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

interface TimelineItemProps {
  note: IWineNote;
}

const TimelineItem: React.VFC<TimelineItemProps> = ({ note }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        ${wineNoteListItemStyle}
        ${alignCenter}
      `}
    >
      <div
        css={css`
          position: relative;
          z-index: 1;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 4px solid ${theme.colors.black10};
          background: ${theme.colors.main.primary};
        `}
      />
      <div
        css={css`
          font-family: ${theme.typography.lato};
          font-weight: 700;
          text-align: center;
          min-width: 82px;
          margin-left: 31px;
          margin-right: 53px;
        `}
      >
        <div
          css={css`
            font-size: 32px;
            color: ${theme.colors.black04};
            line-height: 38px;
          `}
        >
          10.10
        </div>
        <div
          css={css`
            font-size: 18px;
            color: ${theme.colors.black06};
            line-height: 22x;
          `}
        >
          2021
        </div>
      </div>
      <WineNote {...note} />
    </div>
  );
};

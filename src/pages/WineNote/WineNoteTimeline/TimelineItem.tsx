import { useMemo } from 'react';
import { css, useTheme } from '@emotion/react';
import { format } from 'date-fns';
import Icon from '~/components/common/Icon';
import WineNote from '~/components/wineNote/WineNote';
import { alignCenter } from '~/styles/common';
import { wineNoteListItemStyle } from '~/styles/wine-note';
import type { IWineNote } from '~/types';

interface TimelineItemProps {
  note: IWineNote;
}

const TimelineItem: React.VFC<TimelineItemProps> = ({ note }) => {
  const theme = useTheme();
  const { regDate, isPublic } = note;

  const { yyyy, mmdd } = useMemo(() => {
    const date = new Date(regDate);
    return {
      yyyy: format(date, 'yyyy'),
      mmdd: format(date, 'MM.dd'),
    };
  }, [regDate]);

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
          flex-basis: 28px;
          flex-shrink: 0;
          border-radius: 50%;
          border: 4px solid ${theme.colors.black10};
          background: ${isPublic
            ? theme.colors.main.primary
            : theme.colors.black08};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          svg {
            width: 12px;
            color: ${theme.colors.black06};
          }
        `}
      >
        {!isPublic && <Icon name="lock" />}
      </div>
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
          {mmdd}
        </div>
        <div
          css={css`
            font-size: 18px;
            color: ${theme.colors.black06};
            line-height: 22x;
          `}
        >
          {yyyy}
        </div>
      </div>
      <WineNote {...note} isTimeline />
    </div>
  );
};

export default TimelineItem;

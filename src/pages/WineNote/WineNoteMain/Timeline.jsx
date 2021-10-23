import React from 'react';
import { css } from '@emotion/react';
import { formatDate } from 'helpers/utils';
import useWineNotesQuery from 'queries/useWineNotesQuery';
import { alignCenter } from 'styles/common';
import Chip from 'components/common/Chip';
import Divider from 'components/common/Divider';
import Spinner from 'components/common/Spinner';
import { ReactComponent as Heart } from 'assets/ic_heart.svg';
import { ReactComponent as HeartOn } from 'assets/ic_heart_on.svg';

const Timeline = () => {
  // TODO: 무한 스크롤 방식으로 변경
  const { data, isLoading } = useWineNotesQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (data.totalElements === 0) {
    return (
      <>
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
      </>
    );
  }

  return (
    <div>
      {data.wineNoteTimeLineResultList.map((item) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Timeline;

const TimelineItem = ({
  descript,
  wineName,
  wineType,
  wineasyUserNickName,
  regDate,
  viewCount,
  wineNoteLikeCount,
  wineNoteWineImagePath,
  isLike,
}) => {
  // TODO: 와인노트 좋아요 기능 추가
  const imageUrl = wineNoteWineImagePath || 'https://via.placeholder.com/160';
  return (
    <div
      css={css`
        display: flex;
        width: 792px;
        border: 1px solid #dfdfdf;
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
        padding: 32px;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      <div
        css={css`
          position: relative;
          flex-shrink: 0;
          margin-right: 32px;
        `}
      >
        <div
          css={css`
            width: 160px;
            height: 160px;
            background-image: url(${imageUrl});
            background-size: cover;
            background-repeat: no-repeat;
          `}
        />
        <button
          css={css`
            cursor: pointer;
            position: absolute;
            top: 12px;
            left: 12px;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            border: 0;
            width: 32px;
            height: 32px;
            ${alignCenter}
            justify-content: center;
            svg {
              color: #fff;
            }
          `}
        >
          {isLike ? <HeartOn /> : <Heart />}
        </button>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin-top: 8px;
          margin-bottom: 8px;
        `}
      >
        <div
          css={css`
            ${alignCenter}
            margin-bottom: 11px;
          `}
        >
          <Chip color="red" label={wineType} />
          <div
            css={(theme) => css`
              font-size: 14px;
              color: ${theme.colors.black02};
              letter-spacing: -3%;
              margin-left: 8px;
            `}
          >
            {wineName}
          </div>
        </div>
        <h3
          css={css`
            font-size: 18px;
            margin-bottom: auto;
          `}
        >
          {descript}
        </h3>
        <div
          css={(theme) => css`
            ${alignCenter}
            font-family: ${theme.typography.lato};
            color: ${theme.colors.black04};
            font-size: 12px;
          `}
        >
          <span>{formatDate(regDate)}</span>
          <Divider />
          <span>조회 {viewCount}</span>
          <Divider />
          <span>좋아요 {wineNoteLikeCount}</span>
        </div>
        <div
          css={(theme) => css`
            font-family: ${theme.typography.lato};
            color: #424242;
          `}
        >
          by. {wineasyUserNickName}
        </div>
      </div>
    </div>
  );
};

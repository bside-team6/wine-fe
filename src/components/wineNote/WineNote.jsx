import { useMemo } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Chip from '~/components/common/Chip';
import Divider from '~/components/common/Divider';
import { formatDate } from '~/helpers/utils';
import { alignCenter } from '~/styles/common';
import { ReactComponent as Heart } from '~/assets/ic_heart.svg';
import { ReactComponent as HeartOn } from '~/assets/ic_heart_on.svg';

const WineNote = ({
  id,
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
  // TODO: 와인노트 좋아요 mutation 기능 추가
  const imageUrl = wineNoteWineImagePath || 'https://via.placeholder.com/160';

  const description = useMemo(() => {
    return descript && descript.length > 80
      ? descript.substring(0, 80) + '...'
      : descript;
  }, [descript]);

  return (
    <Link
      to={`/wine-note/${id}`}
      css={css`
        display: block;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      <div
        css={(theme) => css`
          display: flex;
          width: 792px;
          max-width: 100%;
          padding: 32px;
          border: 1px solid #dfdfdf;
          border-radius: 20px;
          box-shadow: ${theme.colors.shadow};
          background: #ffffff;
          &:hover {
            background: #fafafa;
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
            <Chip wineType={wineType} />
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
            {description}
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
    </Link>
  );
};

export default WineNote;

import { css } from '@emotion/react';
import StarRatings from 'react-star-ratings';
import Chip from '~/components/common/Chip';
import Divider from '~/components/common/Divider';
import { theme } from '~/helpers/theme';
import { formatDate, formatSweet } from '~/helpers/utils';
import { alignCenter } from '~/styles/common';
import { ReactComponent as Heart } from '~/assets/ic_heart.svg';
import { ReactComponent as HeartOn } from '~/assets/ic_heart_on.svg';

const DetailNote = ({
  wineNoteWineImages,
  wineType,
  wineName,
  wineasyUserNickName,
  regDate,
  viewCount,
  descript,
  isLike,
  wineNoteLikeCount,
  sweet, // required
  score, // required
  price, // optional
  drinkDate, // optional
  wineNoteFood, // optional
}) => {
  const imageUrl =
    wineNoteWineImages[0]?.imagePath || 'https://via.placeholder.com/420';

  return (
    <div
      css={(theme) => css`
        position: relative;
        display: flex;
        width: 1200px;
        background: #fff;
        margin: 0 auto;
        padding: 20px;
        box-shadow: ${theme.colors.shadow};
      `}
    >
      <div
        css={css`
          width: 420px;
          margin-right: 40px;
          flex-shrink: 0;
        `}
      >
        <img src={imageUrl} alt="note" />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-grow: 1;
        `}
      >
        <Chip wineType={wineType} />
        <div
          css={css`
            font-weight: 700;
            font-size: 24px;
            margin-top: 8px;
            margin-bottom: 12px;
          `}
        >
          {wineName}
        </div>
        <div
          css={(theme) => css`
            ${alignCenter}
            font-family: ${theme.typography.lato};
            color: ${theme.colors.black06};
            font-size: 12px;
            margin-bottom: 32px;
          `}
        >
          <span>by. {wineasyUserNickName}</span>
          <Divider />
          <span>{formatDate(regDate)}</span>
          <Divider />
          <span>조회 {viewCount}</span>
        </div>
        <div
          css={(theme) => css`
            color: ${theme.colors.black02};
          `}
        >
          {descript}
        </div>
        <div
          css={css`
            margin-top: auto;
            align-self: stretch;
            background: #fafafa;
            border-radius: 20px;
            ${alignCenter}
          `}
        >
          <div
            css={css`
              flex-shrink: 0;
              width: 253px;
              flex-basis: 253px;
              display: flex;
              justify-content: center;
            `}
          >
            <div>
              <div
                css={css`
                  font-weight: 700;
                  margin-bottom: 8px;
                `}
              >
                {wineasyUserNickName}님의 평가
              </div>
              <div
                css={(theme) => css`
                  color: ${theme.colors.purple};
                `}
              >
                입맛에 잘 맞아요!
              </div>
            </div>
          </div>
          <div
            css={(theme) => css`
              flex-grow: 1;
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              border-left: 1px solid #dfdfdf;
              margin-top: 16px;
              margin-bottom: 16px;
              padding-left: 60px;
              & > div {
                ${alignCenter}
                span {
                  color: ${theme.colors.black06};
                  margin-right: 8px;
                }
              }
            `}
          >
            <div>
              <span>별점</span>
              <StarRatings
                rating={score}
                starDimension="12px"
                starSpacing="0px"
                starRatedColor={theme.colors.purple}
                starEmptyColor="#c5c5c5"
              />
            </div>
            <div>
              <span>당도</span>
              <div>{formatSweet(sweet)}</div>
            </div>
            {!!price && (
              <div>
                <span>가격</span>
                <div>{price.toLocaleString()}</div>
              </div>
            )}
            {drinkDate && (
              <div>
                <span>마신날</span>
                <div>{formatDate(drinkDate, 'yyyy-MM-dd')}</div>
              </div>
            )}
            {wineNoteFood && (
              <div
                css={css`
                  grid-column: span 2 / span 2;
                `}
              >
                <span>음식</span>
                <div>{wineNoteFood}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        css={css`
          cursor: pointer;
          background: #fff;
          border: 0;
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 1;
          text-align: center;
        `}
      >
        <div>{isLike ? <HeartOn /> : <Heart />}</div>
        <div
          css={(theme) => css`
            color: ${theme.colors.black04};
            font-size: 12px;
            font-family: ${theme.typography.lato};
          `}
        >
          {wineNoteLikeCount}
        </div>
      </button>
    </div>
  );
};

export default DetailNote;

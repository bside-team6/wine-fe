import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Chip from '~/components/common/Chip';
import { theme } from '~/helpers/theme';
import wineBottle from '~/assets/wineBottle.png';

const WineItem = ({
  id,
  data,
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
  return (
    <Link
      to={`/wine-list/${id}`}
      css={css`
        display: block;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      <div
        css={() =>
          css`
            display: flex;
            flex-direction: column;
            width: 282px;
            height: 490px;
          `
        }
      >
        <div
          css={() => css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 282px;
            height: 352px;
            background-color: #ececec;
          `}
        >
          <img
            src={data.wineImage || wineBottle}
            alt="thumb"
            css={css`
              width: 170px;
              height: 254px;
            `}
          />
        </div>
        <div>
          <Chip wineType={data.type} />
          <div
            css={() => css`
              font-size: 14px;
              font-weight: 700;
            `}
          >
            {data.nameKr}
          </div>
          <div
            css={() => css`
              font-size: 12px;
              color: #424242;
            `}
          >
            <span
              css={() => css`
                margin-right: 12px;
              `}
            >
              {data.sweet === 1 && '달지않음'}
              {(data.sweet === 2 || data.sweet === 3) && '약간 달달함'}
              {(data.sweet === 4 || data.sweet === 5) && '아주 달달함'}
            </span>
            {data.foodList.map((food, key) => (
              <span
                css={() =>
                  css`
                    margin-left: 2px;
                  `
                }
                key={key}
              >
                #{food}
              </span>
            ))}
          </div>
          <StarRatings
            rating={data.wineScoreAverage}
            starDimension="12px"
            starSpacing="0px"
            starRatedColor={theme.colors.purple}
            starEmptyColor="#c5c5c5"
          />
          <div>3만원대</div>
        </div>
      </div>
    </Link>
  );
};

export default WineItem;

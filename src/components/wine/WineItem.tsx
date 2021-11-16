import { css, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Chip from '~/components/common/Chip';
import { formatSweet } from '~/helpers/utils';
import type { IWine } from '~/types';

const WineItem = ({
  id,
  wineImage,
  wineType,
  wineName,
  sweet,
  scoreAverage,
  price,
  matchingFoods,
}: IWine) => {
  const theme = useTheme();

  return (
    <Link
      to={`/wine/${id}`}
      css={css`
        display: block;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 282px;
          height: 490px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 282px;
            height: 352px;
            background-color: ${theme.colors.black09};
          `}
        >
          <img
            src={wineImage.imagePath}
            alt="thumb"
            css={css`
              width: 170px;
              height: 254px;
            `}
          />
        </div>
        <div>
          <Chip wineType={wineType} />
          <div
            css={css`
              font-size: 14px;
              font-weight: 700;
            `}
          >
            {wineName}
          </div>
          <div
            css={css`
              font-size: 12px;
              color: ${theme.colors.black02};
            `}
          >
            <span
              css={css`
                margin-right: 12px;
              `}
            >
              {formatSweet(sweet)}
            </span>
            {matchingFoods.map((food) => (
              <span
                key={food}
                css={css`
                  margin-left: 2px;
                `}
              >
                #{food}
              </span>
            ))}
          </div>
          <StarRatings
            rating={scoreAverage}
            starDimension="12px"
            starSpacing="0px"
            starRatedColor={theme.colors.main.primary}
            starEmptyColor={theme.colors.black07}
          />
          {price >= 1_000 && (
            <div>
              {String(price).slice(0, -3)}
              {price >= 10_000 ? '만원 대' : '천원 대'}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default WineItem;

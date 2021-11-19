import { css, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import Chip from '~/components/common/Chip';
import Divider from '~/components/common/Divider';
import StarRatings from '~/components/common/StarRatings';
import { formatPrice, formatSweet } from '~/helpers/utils';
import { alignCenter, flexCenter, maxTwoLines } from '~/styles/common';
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
  reviewCount,
}: IWine) => {
  const theme = useTheme();

  return (
    <Link
      to={`/wine/${id}`}
      css={css`
        display: block;
      `}
    >
      <div>
        <div
          css={css`
            ${flexCenter}
            width: 282px;
            height: 352px;
            padding-top: 49px;
            padding-bottom: 49px;
            background: #ececec;
            margin-bottom: 17px;
            img {
              max-height: 100%;
            }
          `}
        >
          <img src={wineImage.imagePath} alt="thumb" />
        </div>
        <div>
          <Chip wineType={wineType} />
          <h4
            css={css`
              margin-top: 8px;
              margin-bottom: 8px;
              font-size: 14px;
              line-height: 20px;
              font-weight: bold;
              color: ${theme.colors.black};
              ${maxTwoLines}
            `}
          >
            {wineName}
          </h4>
          <div
            css={css`
              ${alignCenter}
              flex-wrap: wrap;
              font-family: ${theme.typography.lato};
              color: ${theme.colors.black02};
              font-size: 12px;
              line-height: 17px;
              margin-bottom: 12px;
            `}
          >
            <span>{formatSweet(sweet)}</span>
            <Divider
              css={css`
                margin-top: 3px;
                margin-bottom: 3px;
              `}
            />
            {matchingFoods.slice(0, 3).map(({ foodName }) => (
              <span
                key={foodName}
                css={css`
                  margin-left: 2px;
                `}
              >
                #{foodName}
              </span>
            ))}
          </div>
          <div
            css={css`
              ${alignCenter}
              line-height: 12px;
            `}
          >
            <StarRatings rating={scoreAverage} />
            <span
              css={css`
                font-size: 12px;
                line-height: 14px;
                margin-left: 4px;
                color: ${theme.colors.black04};
                font-family: ${theme.typography.lato};
              `}
            >
              ({reviewCount})
            </span>
          </div>
          <div
            css={css`
              margin-top: 6px;
              line-height: 17px;
              color: ${theme.colors.black};
              font-family: ${theme.typography.lato};
            `}
          >
            {formatPrice(price)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WineItem;

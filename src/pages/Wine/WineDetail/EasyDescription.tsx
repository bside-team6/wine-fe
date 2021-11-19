import { css, useTheme } from '@emotion/react';
import { wineTypeMap } from '~/helpers/constants';
import { formatAcidity, formatSweetAlt } from '~/helpers/utils';
import { alignCenter } from '~/styles/common';
import type { IWineDetail } from '~/types';
import quoteImg from '~/assets/quote.png';
import wineGlassImg from '~/assets/wine_glass.png';

const EasyDescription: React.VFC<IWineDetail> = ({
  wineType,
  sweet,
  region,
  acidity,
  matchingFoods,
}) => {
  const theme = useTheme();

  const { text: textColor, bg: bgColor, typeKr } = wineTypeMap[wineType];

  return (
    <div
      css={css`
        ${alignCenter}
        background: ${theme.colors.black10};
        border-radius: 20px;
        height: 240px;
        strong {
          font-weight: 700;
        }
      `}
    >
      <img
        src={wineGlassImg}
        alt="easy_desc"
        css={css`
          margin-left: 143px;
          margin-right: 147px;
        `}
      />
      <div
        css={css`
          position: relative;
          font-size: 24px;
          line-height: 35px;
          letter-spacing: -0.03em;
          color: ${theme.colors.black02};
          p:first-of-type {
            margin-bottom: 6px;
          }
          &::before {
            position: absolute;
            top: -46px;
            left: 0;
            display: block;
            content: url(${quoteImg});
            width: 41px;
            height: 32px;
          }
          &::after {
            position: absolute;
            right: 0;
            bottom: -46px;
            display: block;
            content: url(${quoteImg});
            width: 41px;
            height: 32px;
            transform: rotate(180deg);
          }
        `}
      >
        <p>
          이 와인은 <strong>{region}산</strong>
          <span
            css={css`
              font-weight: 500;
              font-size: 20px;
              line-height: 29px;
              color: ${textColor};
              background: ${bgColor};
              border-radius: 10px;
              padding: 2px 8px 2px 4px;
              margin-left: 10px;
              margin-right: 6px;
            `}
          >
            #{typeKr}와인
          </span>
          이에요.{' '}
          <strong>
            {formatSweetAlt(sweet)}, {formatAcidity(acidity)}
          </strong>
        </p>
        <p>
          <strong>
            {matchingFoods.map((food) => food.foodName).join(', ')}
          </strong>
          에 잘 어울리는 와인이에요!
        </p>
      </div>
    </div>
  );
};

export default EasyDescription;

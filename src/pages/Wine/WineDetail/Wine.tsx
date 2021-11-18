import { css, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import Chip from '~/components/common/Chip';
import RoundButton from '~/components/common/RoundButton';
import StarRatings from '~/components/common/StarRatings';
import { formatPrice } from '~/helpers/utils';
import { alignCenter, flexCenter } from '~/styles/common';
import type { IWineDetail } from '~/types';

const Wine: React.VFC<IWineDetail> = ({
  id,
  wineImage,
  wineType,
  wineName,
  wineNameEn,
  sweet,
  scoreAverage,
  reviewCount,
  isRefrigerated,
  refrigeratedCount,
  region,
  capacity,
  price,
  varieties,
}) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          flex-shrink: 0;
        `}
      >
        <div
          css={css`
            ${flexCenter}
            width: 486px;
            height: 560px;
            background: #fafafa;
            img {
              height: 450px;
            }
          `}
        >
          <img src={wineImage.imagePath} alt={wineImage.imageName} />
        </div>
        <div
          css={css`
            text-align: center;
            font-weight: bold;
            margin-top: 16px;
            span {
              color: ${theme.colors.black02};
            }
            a {
              text-decoration: underline;
              color: ${theme.colors.black06};
            }
          `}
        >
          <span>이 와인을 마신 적이 있나요? </span>
          <Link to="/wine-note/write">노트쓰러가기</Link>
        </div>
      </div>
      <div
        css={css`
          margin-left: 126px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        `}
      >
        <div>
          <Chip wineType={wineType} />
        </div>
        <h2
          css={css`
            margin-top: 12px;
            margin-bottom: 8px;
            font-weight: bold;
            font-size: 32px;
            line-height: 46px;
          `}
        >
          {wineName}
        </h2>
        <h4
          css={css`
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 35px;
          `}
        >
          {wineNameEn}
        </h4>
        <div css={alignCenter}>
          <StarRatings rating={scoreAverage} size={23} />
          <span
            css={css`
              margin-left: 6px;
              font-size: 16px;
              line-height: 19px;
              font-family: ${theme.typography.lato};
              color: ${theme.colors.main.primary};
            `}
          >
            ({reviewCount})
          </span>
        </div>
        <div
          css={css`
            width: 414px;
            margin-top: 60px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-row-gap: 27px;
            color: ${theme.colors.black01};
            font-family: ${theme.typography.lato};
            p {
              font-size: 16px;
            }
          `}
        >
          <div>
            <div>가격대</div>
            <p
              css={css`
                font-weight: 700;
              `}
            >
              {formatPrice(price)}
            </p>
          </div>
          <div>
            <div>용량</div>
            <p>{capacity}ml</p>
          </div>
          <div>
            <div>생산지</div>
            <p>{region}</p>
          </div>
          <div
            css={css`
              grid-column: 1 / span 3;
            `}
          >
            <div>품종</div>
            <p>{varieties[0]}</p>
          </div>
        </div>
        <div
          css={css`
            margin-top: auto;
            margin-bottom: 50px;
            text-align: center;
          `}
        >
          <RoundButton
            icon="bookmark"
            size="large"
            css={css`
              border-radius: 26px;
              border-color: ${theme.colors.black};
              background: ${theme.colors.black};
              width: 440px;
              font-size: 16px;
              letter-spacing: -0.03em;
            `}
          >
            {isRefrigerated ? '담기 완료' : '와인냉장고에 담기'}
          </RoundButton>
          <div
            css={css`
              margin-top: 12px;
              color: ${theme.colors.black05};
            `}
          >
            {refrigeratedCount}명이 저장했어요!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wine;

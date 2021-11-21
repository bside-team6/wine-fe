import { useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Chip from '~/components/common/Chip';
import IconButton from '~/components/common/IconButton';
import RoundButton from '~/components/common/RoundButton';
import StarRatings from '~/components/common/StarRatings';
import { formatPrice } from '~/helpers/utils';
import useAuthConfirm from '~/hooks/useAuthConfirm';
import useWineRefrigeratorMutation from '~/queries/useWineRefrigeratorMutation';
import { alignCenter, buttonStyle, flexCenter } from '~/styles/common';
import type { IWineDetail } from '~/types';

const Wine: React.VFC<IWineDetail> = ({
  id,
  wineImage,
  wineType,
  wineName,
  wineNameEn,
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

  const { mutate } = useWineRefrigeratorMutation();

  const onClickRefrigerateButton = useAuthConfirm({
    confirmContent: `와인냉장고 담기 기능은 로그인 후 이용할 수 있어요.\n로그인 페이지로 이동할까요?`,
    onSuccess: () =>
      mutate({
        wineId: id,
        drinkDate: format(new Date(), 'yyyy-MM-dd'),
      }),
  });

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
            font-family: 'condor', sans-serif;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 35px;
          `}
        >
          {wineNameEn}
        </h4>
        <div css={alignCenter}>
          <StarRatings value={scoreAverage} size={23} />
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
            .grid-data {
              font-size: 16px;
              ${alignCenter}
            }
          `}
        >
          <div>
            <div>가격대</div>
            <div
              className="grid-data"
              css={css`
                font-weight: 700;
              `}
            >
              {formatPrice(price)}
            </div>
          </div>
          <div>
            <div>용량</div>
            <div className="grid-data">{capacity}ml</div>
          </div>
          <div>
            <div>생산지</div>
            <div className="grid-data">{region}</div>
          </div>
          <div
            css={css`
              grid-column: 1 / span 3;
            `}
          >
            <div>품종</div>
            <div className="grid-data">
              <span>{varieties[0]}</span>
              {varieties.length > 1 && (
                <VarietiesToolTip varieties={varieties} />
              )}
            </div>
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
            onClick={onClickRefrigerateButton}
            icon="bookmark"
            size="large"
            disabled={isRefrigerated}
            css={css`
              border-radius: 26px;
              border-color: ${theme.colors.black};
              background: ${theme.colors.black};
              width: 440px;
              font-size: 16px;
              letter-spacing: -0.03em;
              &:disabled {
                color: ${theme.colors.black04};
                border-color: ${theme.colors.black08};
                background: ${theme.colors.black08};
              }
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

const VarietiesToolTip = ({ varieties }: { varieties: string[] }) => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        css={css`
          position: relative;
          margin-left: 12px;
          ${alignCenter}
        `}
      >
        <button
          onClick={() => setIsOpen((state) => !state)}
          css={css`
            ${buttonStyle}
            line-height: 20px;
            height: 20px;
            font-weight: bold;
            font-size: 12px;
            color: ${theme.colors.white};
            background: ${theme.colors.black};
            padding: 0 8px;
            border-radius: 10px;
          `}
        >
          더보기 +
        </button>
        <div
          css={css`
            display: ${isOpen ? 'block' : 'none'};
            position: absolute;
            width: 300px;
            top: 36px;
            left: 0px;
            background: ${theme.colors.white};
            border: 1px solid ${theme.colors.border};
            box-shadow: ${theme.colors.shadow};
            border-radius: 4px;
            padding: 12px 52px 12px 16px;
            &:before,
            &:after {
              content: ' ';
              display: block;
              width: 0;
              height: 0;
              position: absolute;
              border-style: solid;
            }
            &:before {
              border-color: transparent transparent ${theme.colors.border}
                transparent;
              border-width: 9px;
              top: -18px;
              left: 17px;
            }
            &:after {
              border-color: transparent transparent ${theme.colors.white}
                transparent;
              border-width: 8px;
              top: -16px;
              left: 18px;
            }
          `}
        >
          {varieties.join(', ')}
          <IconButton
            onClick={() => setIsOpen(false)}
            name="cancel"
            css={css`
              position: absolute;
              top: 21px;
              right: 12px;
              z-index: 1;
            `}
          />
        </div>
      </div>
    </>
  );
};

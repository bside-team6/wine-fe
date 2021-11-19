import { css } from '@emotion/react';
import Divider from '~/components/common/Divider';
import WineGauge from '~/components/wine/WineGauge';
import { alignCenter } from '~/styles/common';
import type { IWineDetail } from '~/types';
import aboutWineLogoImg from '~/assets/about_wine.png';
import { ReactComponent as One } from '~/assets/circle_one.svg';
import { ReactComponent as Two } from '~/assets/circle_two.svg';

const AboutWine: React.VFC<IWineDetail> = ({
  sweet,
  acidity,
  body,
  matchingFoods,
}) => {
  return (
    <div
      css={css`
        position: relative;
        margin-top: 135px;
        &::before {
          position: relative;
          top: -47px;
          display: block;
          content: url(${aboutWineLogoImg});
          width: 171px;
          height: 25px;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 24px;
          grid-row-gap: 0px;
          h3 {
            font-weight: bold;
            font-size: 16px;
            line-height: 23px;
            letter-spacing: -0.03em;
            ${alignCenter}
            span {
              margin-left: 8px;
            }
          }
          hr {
            margin-top: 16px;
            margin-bottom: 43px;
          }
        `}
      >
        <div>
          <h3>
            <One />
            <span>당도 / 산도 / 바디</span>
          </h3>
          <Divider type="vertical" />
          <div
            css={css`
              & > div {
                margin-bottom: 32px;
                &:last-of-type {
                  margin-bottom: 0;
                }
              }
            `}
          >
            <WineGauge
              label="당도"
              value={sweet}
              minTick="덜 달아요"
              maxTick="달아요"
            />
            <WineGauge
              label="산도"
              value={acidity}
              minTick="덜 셔요"
              maxTick="많이 셔요"
            />
            <WineGauge
              label="바디"
              value={body}
              minTick="가벼워요"
              maxTick="무거워요"
            />
          </div>
        </div>
        <div>
          <h3>
            <Two />
            <span>함께하면 좋은 음식</span>
          </h3>
          <Divider type="vertical" />
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              margin-right: -16px;
              margin-bottom: -16px;
            `}
          >
            {matchingFoods.map(({ foodName, imagePath }) => (
              <div
                key={foodName}
                css={css`
                  margin-right: 16px;
                  margin-bottom: 16px;
                  border-radius: 30px;
                  letter-spacing: -0.03em;
                `}
              >
                <img src={imagePath} alt={foodName} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWine;

import { css, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import Chip from '~/components/common/Chip';
import Divider from '~/components/common/Divider';
import IconButton from '~/components/common/IconButton';
import { alignCenter } from '~/styles/common';
import { WINE_TYPE } from '~/types';
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/swiper.min.css';
import wineMainImg from '~/assets/wine_main.png';

const Home = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          width: ${theme.breakpoints.lg};
          max-width: 100%;
          margin: 140px auto 153px;
          flex-shrink: 0;
        `}
      >
        <div>
          <h2
            css={css`
              margin-top: 60px;
              margin-bottom: 48px;
              font-weight: bold;
              font-size: 40px;
              line-height: 58px;
            `}
          >
            지금 당신이 궁금한 그 와인,
            <br />
            쉽게 찾아보세요!
          </h2>
          <div>간편검색</div>
        </div>
        <img src={wineMainImg} alt="wine_main" />
      </div>
      <div
        css={css`
          padding-top: 120px;
          padding-bottom: 120px;
          background: ${theme.colors.black10};
          flex-grow: 1;
        `}
      >
        <div
          css={css`
            ${alignCenter}
            width: ${theme.breakpoints.lg};
            max-width: 100%;
            margin: 0 auto 48px;
          `}
        >
          <h2
            css={css`
              font-weight: bold;
              font-size: 40px;
              line-height: 58px;
              margin-right: auto;
            `}
          >
            누구나 나눌 수 있는 와인 이야기
          </h2>
          <IconButton
            name="arrow"
            css={css`
              svg {
                width: 36px;
                transform: matrix(-1, 0, 0, 1, 0, 0);
              }
            `}
          />
        </div>
        <div
          css={css`
            .swiper-slide {
              width: auto;
              &:first-child {
                margin-left: calc((100vw - ${theme.breakpoints.lg}) / 2);
              }
              &:last-child {
                margin-right: calc((100vw - ${theme.breakpoints.lg}) / 2);
              }
            }
          `}
        >
          <Swiper
            modules={[FreeMode]}
            slidesPerView="auto"
            spaceBetween={24}
            freeMode
          >
            <SwiperSlide>
              <WineNoteSlide />
            </SwiperSlide>
            <SwiperSlide>
              <WineNoteSlide />
            </SwiperSlide>
            <SwiperSlide>
              <WineNoteSlide />
            </SwiperSlide>
            <SwiperSlide>
              <WineNoteSlide />
            </SwiperSlide>
            <SwiperSlide>
              <WineNoteSlide />
            </SwiperSlide>
            <SwiperSlide>
              <WineNoteSlide />
            </SwiperSlide>
            <SwiperSlide>
              <WineNoteSlide />
            </SwiperSlide>
            <SwiperSlide>
              <WineNoteSlide />
            </SwiperSlide>
            <SwiperSlide>
              <WineNoteSlide />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;

const WineNoteSlide = () => {
  const theme = useTheme();
  const imageUrl = 'https://via.placeholder.com/160';
  const isLike = true;
  const id = 0;

  return (
    <Link
      to={`/wine-note/${id}`}
      css={css`
        display: block;
      `}
    >
      <div
        css={css`
          width: 384px;
          height: 480px;
          border: 1px solid;
          border-color: ${theme.colors.border};
          border-radius: 20px;
          box-shadow: ${theme.colors.shadow};
          background: ${theme.colors.white};
          text-align: center;
          padding-top: 80px;
          padding-bottom: 80px;
          position: relative;
        `}
      >
        <IconButton
          name={isLike ? 'heart-fill' : 'heart'}
          color={isLike ? theme.colors.black : theme.colors.black07}
          css={css`
            position: absolute;
            top: 32px;
            right: 32px;
            z-index: 1;
            transform: scale(1.5);
          `}
        />
        <div
          css={css`
            margin: 0 auto 48px;
            width: 120px;
            height: 120px;
            background-image: url(${imageUrl});
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 50%;
            overflow: hidden;
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 152px;
          `}
        >
          <div
            css={css`
              ${alignCenter}
              justify-content: center;
            `}
          >
            <Chip wineType={WINE_TYPE.CHAMPAGNE} />
            <span
              css={css`
                color: ${theme.colors.black02};
              `}
            >
              장 로롱, 꼬또 뒤 리오네
            </span>
          </div>
          <div
            css={css`
              font-size: 18px;
              line-height: 26px;
              color: ${theme.colors.black};
              margin-top: 12px;
              flex-grow: 1;
            `}
          >
            와인 초보의 첫 와인
          </div>
          <div
            css={css`
              ${alignCenter}
              font-family: ${theme.typography.lato};
              color: ${theme.colors.black04};
              font-size: 12px;
            `}
          >
            <span>Oct 1. 2021</span>
            <Divider />
            <span>조회 82</span>
            <Divider />
            <span>좋아요 5</span>
          </div>
          <div
            css={css`
              font-family: ${theme.typography.lato};
              color: ${theme.colors.black02};
              line-height: 17px;
            `}
          >
            by. Wineasy
          </div>
        </div>
      </div>
    </Link>
  );
};

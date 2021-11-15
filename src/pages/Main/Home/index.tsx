import { Suspense } from 'react';
import { css, useTheme } from '@emotion/react';
import SimpleSearch from './SimpleSearch';
import WineNoteSwiper from './WineNoteSwiper';
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/swiper.min.css';
import wineMainImg from '~/assets/wine_main.png';

const Home = () => {
  const theme = useTheme();

  return (
    <Suspense fallback={null}>
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
            <SimpleSearch />
          </div>
          <img src={wineMainImg} alt="wine_main" />
        </div>
        <WineNoteSwiper />
      </div>
    </Suspense>
  );
};

export default Home;

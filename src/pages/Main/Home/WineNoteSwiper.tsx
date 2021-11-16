import { css, useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import IconButton from '~/components/common/IconButton';
import useWineNotesQuery from '~/queries/useWineNotesQuery';
import { alignCenter } from '~/styles/common';
import WineNoteSlide from './WineNoteSlide';
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/swiper.min.css';

const WineNoteSwiper = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const { data } = useWineNotesQuery({
    isTimeline: false,
  });
  const notes = data?.pages[0]?.content;

  // TODO: 와인노트 없을떄
  // const hasWineNotes = !data?.pages[0]?.empty;

  return (
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
          onClick={() => navigate('/wine-note')}
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
            &:first-of-type {
              margin-left: calc((100vw - ${theme.breakpoints.lg}) / 2);
            }
            &:last-of-type {
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
          {notes?.map((note) => (
            <SwiperSlide key={note.id}>
              <WineNoteSlide {...note} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WineNoteSwiper;

import { css, Theme } from '@emotion/react';
import PopularNote from './PopularNote';
import Timeline from './Timeline';

const WineNoteMainContent = () => {
  return (
    <div
      css={(theme: Theme) => css`
        background: ${theme.colors.black10};
        padding: 80px 0 120px;
        min-height: 568px;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          width: 1200px;
          max-width: 100%;
          margin: 0 auto;
        `}
      >
        <Timeline />
        <PopularNote />
      </div>
    </div>
  );
};

export default WineNoteMainContent;

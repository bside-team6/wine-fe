import React from 'react';
import { css } from '@emotion/react';
import Timeline from './Timeline';
import PopularNote from './PopularNote';

const WineNoteMainContent = () => {
  return (
    <div
      css={css`
        background: #fafafa;
        padding: 62px 0;
      `}
    >
      <div
        css={css`
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

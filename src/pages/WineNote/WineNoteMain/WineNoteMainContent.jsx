import React from 'react';
import { css } from '@emotion/react';
import Timeline from './Timeline';
import PopularNote from './PopularNote';

const WineNoteMainContent = () => {
  return (
    <div
      css={css`
        background: #fafafa;
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

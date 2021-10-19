import React from 'react';
import { css } from '@emotion/react';

const colorMap = {
  red: {
    text: '#E53858',
    bg: '#FAE6EA',
  },
  orange: {
    text: '#F86818',
    bg: '#FEF0E8',
  },
  blue: {
    text: '#387DE5',
    bg: 'rgba(56, 125, 229, 0.1)',
  },
  green: {
    text: '#0EAB44',
    bg: '#EAFEEC',
  },
};

const Chip = ({ color = 'red', label = '' }) => {
  return (
    <div
      css={css`
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 99px;
        background-color: ${colorMap[color].bg};
        height: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
      `}
    >
      <span
        css={css`
          padding-top: 3px;
          font-family: Lato;
          font-size: 12px;
          line-height: 12px;
          font-weight: 700;
          color: ${colorMap[color].text};
        `}
      >
        {label}
      </span>
    </div>
  );
};

export default Chip;

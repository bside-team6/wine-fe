import { css } from '@emotion/react';

const colorMap = {
  RED: {
    text: '#E53858',
    bg: '#FAE6EA',
  },
  ROSE: {
    text: '#F86818',
    bg: '#FEF0E8',
  },
  WHITE: {
    text: '#387DE5',
    bg: '#EBF2FC',
  },
  SPARKLING: {
    text: '#0EAB44',
    bg: '#EAFEEC',
  },
  CHAMPAGNE: {
    text: '#A39200',
    bg: '#FCF9DF',
  },
  FORTIFIED: {
    text: '#AE4444',
    bg: '#F9EBEB',
  },
  SWEET: {
    text: '#F06496',
    bg: '#FFEDF6',
  },
};

const Chip = ({ wineType }) => {
  return (
    <div
      css={css`
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 99px;
        background-color: ${colorMap[wineType].bg};
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
          color: ${colorMap[wineType].text};
        `}
      >
        {wineType}
      </span>
    </div>
  );
};

export default Chip;

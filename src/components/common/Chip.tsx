import { css } from '@emotion/react';
import { WINE_TYPE } from '~/types';

const colorMap: Record<WINE_TYPE, { text: string; bg: string }> = {
  [WINE_TYPE.RED]: {
    text: '#E53858',
    bg: '#FAE6EA',
  },
  [WINE_TYPE.ROSE]: {
    text: '#F86818',
    bg: '#FEF0E8',
  },
  [WINE_TYPE.WHITE]: {
    text: '#387DE5',
    bg: '#EBF2FC',
  },
  [WINE_TYPE.SPARKLING]: {
    text: '#0EAB44',
    bg: '#EAFEEC',
  },
  [WINE_TYPE.CHAMPAGNE]: {
    text: '#A39200',
    bg: '#FCF9DF',
  },
  [WINE_TYPE.FORTIFIED]: {
    text: '#AE4444',
    bg: '#F9EBEB',
  },
  [WINE_TYPE.SWEET]: {
    text: '#F06496',
    bg: '#FFEDF6',
  },
};

export interface ChipProps {
  wineType: WINE_TYPE;
}

const Chip = ({ wineType }: ChipProps) => {
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

import { css } from '@emotion/react';
import { wineTypeMap } from '~/helpers/constants';
import { inlineFlexCenter } from '~/styles/common';
import { WINE_TYPE } from '~/types';

export interface ChipProps {
  wineType: WINE_TYPE;
}

const Chip: React.VFC<ChipProps> = ({ wineType }) => {
  return (
    <div
      css={css`
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 99px;
        background-color: ${wineTypeMap[wineType].bg};
        height: 20px;
        ${inlineFlexCenter}
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
          color: ${wineTypeMap[wineType].text};
        `}
      >
        {wineType}
      </span>
    </div>
  );
};

export default Chip;

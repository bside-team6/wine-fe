import { css } from '@emotion/react';
import sprites from '~/assets/sprites-24.png';

export const spritesStyle = css`
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url('${sprites}');
  background-repeat: no-repeat;
  background-size: 658px 24px;
  background-position-y: 0px;
`;

export const alignCenter = css`
  display: flex;
  align-items: center;
`;

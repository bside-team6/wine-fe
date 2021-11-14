import { css } from '@emotion/react';
import styled from '@emotion/styled';
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

export const buttonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0;
  outline: 0;
  appearance: none;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const imageButtonStyle = css`
  ${buttonStyle}
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ImageButton = styled.button`
  ${imageButtonStyle}
`;

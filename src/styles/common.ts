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

export const contentCenter = css`
  display: flex;
  justify-content: center;
`;

export const flexCenter = css`
  ${alignCenter}
  justify-content: center;
`;

export const inlineFlexCenter = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const buttonStyle = css`
  ${inlineFlexCenter}
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0;
  outline: 0;
  appearance: none;
  text-decoration: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
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

export const maxTwoLines = css`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const spacing8Style = css`
  display: flex;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-bottom: -8px;
  > * {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;

// visually hidden
export const hiddenStyle = css`
  border: 0;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

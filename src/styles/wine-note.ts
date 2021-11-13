import { css, Theme } from '@emotion/react';
import { alignCenter } from '~/styles/common';

export const containerStyle = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const headerStyle = (theme: Theme) => css`
  width: ${theme.breakpoints.lg};
  max-width: 100%;
  margin: 80px auto 40px;
  flex-shrink: 0;
`;

export const headerTitleStyle = css`
  font-weight: 700;
  font-size: 40px;
  line-height: 57.92px;
  white-space: pre-wrap;
`;

export const headerButtonGroupStyle = css`
  margin-top: 80px;
  ${alignCenter}
`;

export const contentStyle = (theme: Theme) => css`
  background: ${theme.colors.black10};
  padding: 80px 0 120px;
  flex-grow: 1;
`;

export const emptyStyle = (theme: Theme) => css`
  text-align: center;
  margin: 20px auto;
  img {
    width: 180px;
    margin-bottom: 24px;
  }
  p {
    font-size: 18px;
    color: ${theme.colors.black02};
  }
`;

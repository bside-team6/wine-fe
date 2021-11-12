import { css, Theme } from '@emotion/react';

export const loginStepContainer = css`
  margin-top: 80px;
  text-align: center;
`;

export const loginTitle = css`
  margin-top: 68px;
  font-size: 32px;
  font-weight: 700;
`;

export const loginDescription = (theme: Theme) => css`
  font-size: 18px;
  color: ${theme.colors.black06};
  margin-top: 24px;
  margin-bottom: 24px;
`;

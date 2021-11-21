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

export const wineNoteListItemStyle = css`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const writeFormStyle = (theme: Theme) => css`
  section {
    margin-bottom: 32px;
    &.inline {
      ${alignCenter}
      justify-content: space-between;

      > p {
        margin-bottom: 0;
      }
    }

    > p {
      display: block;
      font-size: 14px;
      line-height: 20px;
      font-weight: bold;
      color: ${theme.colors.black02};
      margin-bottom: 16px;
      &.required {
        &:before {
          content: '* ';
          color: #e53858;
        }
      }
    }
  }

  hr {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  button[type='submit'] {
    background: ${theme.colors.black};
    border-color: ${theme.colors.black};
  }

  input.input,
  textarea {
    font-size: 14px;
    line-height: 20px;
    max-width: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 8px;
    background: #ffffff;
    &::placeholder {
      color: #a8a8a8;
    }
  }
  input.input {
    width: 338px;
    height: 48px;
    padding-left: 14px;
    padding-right: 14px;
  }
  textarea {
    width: 100%;
    height: 312px;
    padding: 24px;
    display: block;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .select__control {
    border: 1px solid #dfdfdf;
    border-radius: 8px;
    height: 48px;
  }
  .select__value-container {
    padding-left: 12px;
    padding-right: 12px;
  }
  .select__placeholder {
    font-size: 14px;
    color: #a8a8a8;
  }
  .select__menu {
    margin-top: 12px;
    background: #ffffff;
    border: 1px solid ${theme.colors.border};
    box-shadow: ${theme.colors.shadow};
    border-radius: 10px;
    .select__menu-list {
      margin-top: 16px;
      margin-bottom: 16px;
      .select__option {
        padding: 10px 19px;
      }
    }
  }
  .select__multi-value {
    background: ${theme.colors.main.light2};
    border-radius: 16px;
    padding-right: 6px;
    .select__multi-value__label {
      color: ${theme.colors.main.primary};
      font-weight: bold;
      font-size: 14px;
      padding: 6px 0px 6px 16px;
    }
    .select__multi-value__remove {
      svg {
        color: ${theme.colors.main.primary};
      }
    }
  }
`;

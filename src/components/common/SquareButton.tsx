import { Children } from 'react';
import { css, useTheme } from '@emotion/react';
import type { SerializedStyles, Theme } from '@emotion/react';
import { inlineFlexCenter } from '~/styles/common';

export interface SquareButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
  bold?: boolean;
  fullWidth?: boolean;
  css?: SerializedStyles | ((theme: Theme) => SerializedStyles);
}

const SquareButton: React.FC<SquareButtonProps> = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  bold,
  fullWidth,
  css: cssProps,
  ...restProps
}) => {
  const theme = useTheme();

  return (
    <button
      css={[
        css`
          position: relative;
          ${inlineFlexCenter}
          cursor: pointer;
          outline: none;
          appearance: none;
          font-size: ${size === 'medium' ? 14 : 16}px;
          border: 1px solid;
          border-color: ${color === 'primary'
            ? theme.colors.black
            : theme.colors.black07};
          border-radius: 8px;
          height: ${size === 'medium' ? 44 : 52}px;
          color: ${variant === 'contained'
            ? theme.colors.white
            : theme.colors.black02};
          background: ${variant === 'contained'
            ? color === 'primary'
              ? theme.colors.black
              : theme.colors.black07
            : theme.colors.white};
          min-width: ${size === 'medium' ? 140 : 186}px;
          ${bold &&
          css`
            font-weight: 700;
          `}
          ${fullWidth &&
          css`
            width: 100%;
          `}
          &:disabled {
            cursor: not-allowed;
            border-color: ${theme.colors.black07};
            color: ${variant === 'contained'
              ? theme.colors.white
              : theme.colors.black07};
            background: ${variant === 'contained'
              ? theme.colors.black07
              : theme.colors.white};
          }
        `,
        typeof cssProps === 'function' ? cssProps(theme) : cssProps,
      ]}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default SquareButton;

export interface SquareButtonGroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  css?: SerializedStyles | ((theme: Theme) => SerializedStyles);
  align?: 'horizontal' | 'vertical';
}

export const SquareButtonGroup: React.FC<SquareButtonGroupProps> = ({
  children,
  align = 'horizontal',
  css: cssProps,
  ...restProps
}) => {
  const theme = useTheme();
  const { length } = Children.toArray(children);

  return (
    <div
      css={[
        align === 'horizontal'
          ? horizontalButtonGroupStyle(length)
          : verticalButtonGroupStyle,
        typeof cssProps === 'function' ? cssProps(theme) : cssProps,
      ]}
      {...restProps}
    >
      {children}
    </div>
  );
};

const horizontalButtonGroupStyle = (count: number) => css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  button {
    width: calc((100% - ${(count - 1) * 8}px) / ${count});
    min-width: 0;
    margin-right: 8px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const verticalButtonGroupStyle = css`
  display: inline-flex;
  flex-direction: column;
  button {
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

import { css, Theme } from '@emotion/react';

export interface SquareButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
}

const SquareButton: React.FC<SquareButtonProps> = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  ...restProps
}) => {
  return (
    <button
      css={(theme: Theme) => css`
        cursor: pointer;
        outline: none;
        appearance: none;
        font-size: ${size === 'medium' ? 14 : 16}px;
        border: ${variant === 'contained' ? 'none' : '1px solid'};
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
        &:disabled {
          cursor: not-allowed;
        }
      `}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default SquareButton;

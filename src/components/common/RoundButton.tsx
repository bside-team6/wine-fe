import { css, useTheme } from '@emotion/react';
import type { SerializedStyles, Theme } from '@emotion/react';
import Icon, { IconName } from '~/components/common/Icon';
import { buttonStyle } from '~/styles/common';

type IconPosition = 'left' | 'right';
type Size = 'small' | 'medium' | 'large';
type Variant = 'contained' | 'outlined';

const heightMap: Record<Size, number> = {
  small: 40,
  medium: 44,
  large: 52,
};

const radiusMap: Record<Size, number> = {
  small: 20,
  medium: 22,
  large: 28,
};

const inactiveStyle = (theme: Theme, variant: Variant) => css`
  border-color: ${theme.colors.black08};
  color: ${variant === 'contained' ? theme.colors.white : theme.colors.black06};
  background: ${variant === 'contained'
    ? theme.colors.black08
    : theme.colors.white};
`;

export interface RoundButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: Variant;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  fullWidth?: boolean;
  icon?: IconName;
  iconPosition?: IconPosition;
  inactive?: boolean;
  css?: SerializedStyles | ((theme: Theme) => SerializedStyles);
}

const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  bold = true,
  fullWidth,
  icon,
  iconPosition = 'left',
  inactive = false,
  css: cssProps,
  ...restProps
}) => {
  const theme = useTheme();

  return (
    <button
      css={[
        css`
          ${buttonStyle}
          position: relative;
          padding: 0 ${children ? 20 : 16}px;
          font-size: 14px;
          font-weight: ${bold ? 'bold' : 'normal'};
          border-radius: ${radiusMap[size]}px;
          height: ${heightMap[size]}px;
          ${size === 'large' &&
          css`
            min-width: 320px;
          `}
          ${fullWidth &&
          css`
            width: 100%;
          `}
          background: ${variant === 'contained'
            ? color === 'primary'
              ? theme.colors.main.primary
              : theme.colors.black08
            : theme.colors.white};
          border: 2px solid;
          border-color: ${color === 'primary'
            ? theme.colors.main.primary
            : theme.colors.black08};
          color: ${variant === 'contained'
            ? theme.colors.white
            : color === 'primary'
            ? theme.colors.main.primary
            : theme.colors.black02};
          ${inactive && inactiveStyle(theme, variant)}
          svg {
            &.left-icon {
              margin-right: ${children ? 8 : 0}px;
            }
            &.right-icon {
              margin-left: 8px;
            }
          }
          &:disabled {
            cursor: not-allowed;
            ${inactiveStyle(theme, variant)}
          }
        `,
        typeof cssProps === 'function' ? cssProps(theme) : cssProps,
      ]}
      {...restProps}
    >
      {icon && iconPosition === 'left' && (
        <Icon name={icon} className="left-icon" />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <Icon name={icon} className="right-icon" />
      )}
    </button>
  );
};

export default RoundButton;

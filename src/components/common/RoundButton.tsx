import { css, useTheme } from '@emotion/react';
import type { SerializedStyles, Theme } from '@emotion/react';
import Icon, { IconName } from '~/components/common/Icon';

type IconPosition = 'left' | 'right';
type Size = 'small' | 'medium' | 'large';

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

const inactiveStyle = (theme: Theme) => css`
  color: ${theme.colors.black06};
  border-color: ${theme.colors.black08};
`;

export interface RoundButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
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
          cursor: pointer;
          outline: none;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          appearance: none;
          padding: 0 ${children ? 20 : 16}px;
          font-size: 14px;
          font-weight: ${bold ? 'bold' : 'normal'};
          border-radius: ${radiusMap[size]}px;
          height: ${heightMap[size]}px;
          ${size === 'large' &&
          css`
            min-width: 320px;
          `}
          background: ${variant === 'contained'
            ? color === 'primary'
              ? theme.colors.main.primary
              : theme.colors.black07
            : theme.colors.white};
          border: ${variant === 'contained' ? 'none' : '2px solid'};
          border-color: ${color === 'primary'
            ? theme.colors.main.primary
            : theme.colors.black07};
          color: ${variant === 'contained'
            ? theme.colors.white
            : color === 'primary'
            ? theme.colors.main.primary
            : theme.colors.black02};
          ${inactive && inactiveStyle(theme)}
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
            ${inactiveStyle(theme)}
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
